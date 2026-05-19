import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Handles contact form submissions via Resend email API with validation and error handling
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.SITE_EMAIL || "ihmid59@gmail.com",
      subject: ` Nouveau message de ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header avec dégradé Sunset simulé -->
          <div style="background: linear-gradient(135deg, #F4A88A 0%, #D9795B 100%); padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Nouveau Message Portfolio</h2>
          </div>

          <!-- Corps du message -->
          <div style="padding: 32px; color: #333333; line-height: 1.6;">
            
            <p style="margin-top: 0;">Bonjour,</p>
            <p>Vous avez reçu un nouveau message via votre portfolio :</p>

            <!-- Bloc Détails -->
            <div style="background-color: #f9fafb; border-left: 4px solid #D9795B; padding: 16px; margin: 24px 0; border-radius: 4px;">
              <p style="margin: 0 0 8px 0;"><strong style="color: #555;">Nom :</strong><br/>${name}</p>
              <p style="margin: 0 0 8px 0;"><strong style="color: #555;">Email :</strong><br/><a href="mailto:${email}" style="color: #D9795B; text-decoration: none;">${email}</a></p>
              <p style="margin: 0;"><strong style="color: #555;">Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
            </div>

            <p style="font-size: 14px; color: #666;">Ce message a été envoyé depuis le formulaire de contact de votre site.</p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #888;">
            &copy; ${new Date().getFullYear()} Ton Portfolio. Tous droits réservés.
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Message envoyé avec succès !" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 },
    );
  }
}
