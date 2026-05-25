import {
  NextResponse,
} from "next/server";

import {
  createClient,
} from "@/lib/supabase/server";

import {
  resend,
} from "@/lib/resend";

export async function POST(

  request: Request

) {

  const formData =
    await request.formData();

  const name =
    formData.get(
      "name"
    );

  const email =
    formData.get(
      "email"
    );

  const company =
    formData.get(
      "company"
    );

  const message =
    formData.get(
      "message"
    );

  const product =
    formData.get(
      "product"
    );

  const attachment =
    formData.get(
      "attachment"
    ) as File;

  const supabase =
    await createClient();

  let attachmentUrl =
    "";

  if (

    attachment &&

    attachment.size > 0

  ) {

    const bytes =
      await attachment
        .arrayBuffer();

    const buffer =
      Buffer.from(
        bytes
      );

    const fileName =
      `${Date.now()}-${attachment.name}`;

    await supabase
      .storage

      .from(
        "inquiries"
      )

      .upload(

        fileName,

        buffer,

        {

          contentType:
            attachment.type,
        }
      );

    const {
      data,
    } = supabase
      .storage

      .from(
        "inquiries"
      )

      .getPublicUrl(
        fileName
      );

    attachmentUrl =
      data.publicUrl;
  }

  await supabase

    .from(
      "inquiries"
    )

    .insert({

      name,

      email,

      company,

      message,

      product,

      attachment:
        attachmentUrl,
    });

  await resend.emails.send({

    from:
      "Vietnam Clothing <onboarding@resend.dev>",

    to: [
      "your@email.com",
    ],

    subject:
      `New Inquiry - ${name}`,

    html: `

      <h2>
        New Inquiry
      </h2>

      <p>
        <strong>Name:</strong>
        ${name}
      </p>

      <p>
        <strong>Email:</strong>
        ${email}
      </p>

      <p>
        <strong>Company:</strong>
        ${company}
      </p>

      <p>
        <strong>Product:</strong>
        ${product}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>
        ${message}
      </p>

      ${
        attachmentUrl

          ? `

            <p>
              <strong>
                Attachment:
              </strong>
            </p>

            <p>
              <a href="${attachmentUrl}">
                View Attachment
              </a>
            </p>
          `

          : ""
      }
    `,
  });

  await resend.emails.send({

    from:
      "Vietnam Clothing <onboarding@resend.dev>",

    to: [
      String(email),
    ],

    subject:
      "We received your inquiry",

    html: `

      <div
        style="
          font-family:
          Arial;
          line-height:
          1.7;
        "
      >

        <h2>
          Thank you for contacting
          Vietnam Clothing
        </h2>

        <p>
          We have received your
          inquiry regarding:
        </p>

        <p>
          <strong>
            ${product}
          </strong>
        </p>

        <p>
          Our sales team will
          contact you shortly.
        </p>

        <br />

        <p>
          Best regards,
        </p>

        <p>
          Vietnam Clothing
        </p>

      </div>
    `,
  });

  return NextResponse.json({

    success: true,
  });
}