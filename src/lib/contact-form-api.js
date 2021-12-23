import { gql } from "@apollo/client";
import client from "../lib/apollo";

export async function sendMail(subject, body, mutationId = "contact") {
  const fromAddress = "swatharindra@gmail.com";
  const toAddress = "chamara@mdidev.com";

  const data = await client.mutate({
    mutation: gql`
      mutation SEND_EMAIL($input: SendEmailInput!) {
        sendEmail(input: $input) {
          origin
          sent
          message
        }
      }
    `,
    variables: {
      input: {
        clientMutationId: mutationId,
        from: fromAddress,
        to: toAddress,
        body: body,
        subject: subject,
      },
    },
  });

  return data?.sendEmail;
}
