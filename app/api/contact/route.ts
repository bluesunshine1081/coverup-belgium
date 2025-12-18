import { NextResponse } from "next/server";

export const runtime = "nodejs"; // pour être sûr d'être en runtime Node

export async function POST(req: Request) {
    try {
        const { name, email, phone, prestation, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Champs obligatoires manquants." },
                { status: 400 }
            );
        }

        const apiKey = process.env.UNOSEND_API_KEY;

        if (!apiKey) {
            console.error("API_KEY manquante dans .env.local");
            return NextResponse.json(
                { error: "Configuration serveur manquante." },
                { status: 500 }
            );
        }

        // Appel à l’API Unosend
        const unosendRes = await fetch("https://www.unosend.co/api/v1/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "contact@covering-bruxelles.be", // doit être un domaine vérifié chez Unosend
                to: ["info@covering-bruxelles.be"],   // où tu veux recevoir le message
                subject: `Nouveau message de ${name} sur le site`,
                html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non communiqué"}</p>
          <p><strong>Prestation :</strong> ${prestation || "Non précisé"}</p>
          <p><strong>Message :</strong></p>
          <p>${(message || "").replace(/\n/g, "<br />")}</p>
        `,
            }),
        });

        if (!unosendRes.ok) {
            const errorBody = await unosendRes
                .json()
                .catch(() => ({ error: "Erreur côté de l'API EMAIL." }));
            console.error("Erreur Api EMAIL:", errorBody);
            return NextResponse.json(
                { error: "Erreur lors de l'envoi du message." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Erreur API /api/contact :", error);
        return NextResponse.json(
            { error: "Erreur interne lors de l'envoi du message." },
            { status: 500 }
        );
    }
}
