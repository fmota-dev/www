import { FastifyInstance } from "fastify"
import { ZodTypeProvider } from "fastify-type-provider-zod"
import { z } from "zod"
import { prisma } from "../lib/prisma"
import dayjs from "dayjs"
import nodamailer from "nodemailer"
import { getMailClient } from "../lib/mail"

export async function createTrip(app: FastifyInstance) {
	app.withTypeProvider<ZodTypeProvider>().post(
		"/trips",
		{
			schema: {
				body: z.object({
					destination: z.string().min(4),
					starts_at: z.coerce.date(),
					ends_at: z.coerce.date(),
					owner_name: z.string(),
					owner_email: z.string().email(),
					emails_to_invite: z.array(z.string().email()),
				}),
			},
		},
		async (request) => {
			const {
				destination,
				starts_at,
				ends_at,
				owner_name,
				owner_email,
				emails_to_invite,
			} = request.body

			if (dayjs(starts_at).isBefore(new Date())) {
				throw new Error("Invalid trip start date.")
			}

			if (dayjs(ends_at).isBefore(starts_at)) {
				throw new Error("Invalid trip end date.")
			}

			const trip = await prisma.trip.create({
				data: {
					destination,
					starts_at,
					ends_at,
					participants: {
						createMany: {
							data: [
								{
									name: owner_name,
									email: owner_email,
									is_confirmed: true,
									is_owner: true,
								},
								...emails_to_invite.map((email) => {
									return { email }
								}),
							],
						},
					},
				},
			})

			const formattedStartsAt = dayjs(starts_at).format("DD/MM/YYYY")
			const formattedEndsAt = dayjs(ends_at).format("DD/MM/YYYY")

			const confirmationLink = `http://localhost:3333/trips/${trip.id}/confirm`

			const mail = await getMailClient()

			const message = await mail.sendMail({
				from: {
					name: "Equipe plann.er",
					address: "suporte@plann.er",
				},
				to: {
					name: owner_name,
					address: owner_email,
				},
				subject: `Confirme sua viagem para ${destination} em ${formattedStartsAt}`,
				html: `<div style="font-family: sans-serif; font-size: 1rem; line-height: 1.6;">
									<p>Você solicitou a criação de uma viagem para <strong>${destination}</strong> nas datas de <strong>${formattedStartsAt} até ${formattedEndsAt}</strong>.</p>
									<p>Para confirmar sua viagem, clique no link abaixo:</p>
									<p><a href="${confirmationLink}">Confirmar viagem</a></p>
									<p>Caso você não saiba do que se trata esse e-mail, apenas ignore esse e-mail.</p>
							</div>`.trim(),
			})

			console.log(nodamailer.getTestMessageUrl(message))

			return { tripId: trip.id }
		}
	)
}
