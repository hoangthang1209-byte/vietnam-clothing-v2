import {
    NextResponse,
  } from "next/server";
  
  import {
    Resend,
  } from "resend";
  
  const resend =
    new Resend(
      process.env.RESEND_API_KEY
    );
  
  export async function POST(
    request: Request
  ) {
  
    try {
  
      const body =
        await request.json();
  
      const {
        name,
        email,
        company,
        message,
        product,
      } = body;
  
      await resend.emails.send({
  
        from:
          "Vietnam Clothing <onboarding@resend.dev>",
  
        to:
          "your@email.com",
  
        subject:
          `New Inquiry - ${product}`,
  
        html:
          `
            <h2>New Inquiry</h2>
  
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
              ${message}
            </p>
          `,
      });
  
      return NextResponse.json({
        success: true,
      });
  
    } catch (
      error
    ) {
  
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 500,
        }
      );``
    }
  }