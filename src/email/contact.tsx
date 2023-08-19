/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { Contact } from "@/models";

export default function ContactFormEmail({
  about,
  date,
  email,
  name,
  project,
  type,
}: Contact) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from your portfolio site
                contact section:
              </Heading>
              <Hr />
              <Text>The sender's name is: {name}</Text>
              <Hr />
              <Text>The sender's email is: {email}</Text>
              <Hr />
              <Text>The sender's project is: {project}</Text>
              <Hr />
              <Text>The sender's request is: {type}</Text>
              <Hr />
              <Text>The sender's project info is: {about}</Text>
              {date && (
                <>
                  <Hr />
                  <Text>The sender's meeting date is: {date}</Text>
                </>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
