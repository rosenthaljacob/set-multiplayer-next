import React, { useState } from "react";
// Next
import Head from "next/head";
// Layout
import MainLayout from "@/layouts/mainLayout/MainLayout";
// Components
import { Card } from "@/components/ui/card";

// Features
import CreateAccountForm from "@/features/auth/createAccount/CreateAccountForm";
import AccountCreated from "@/features/auth/createAccount/AccountCreated";

CreateAccount.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
);

export default function CreateAccount() {
  const [createdWithEmail, setCreatedWithEmail] = useState<string | null>(null);

  const handleCreated = (email: string) => setCreatedWithEmail(email);

  if (createdWithEmail) return <AccountCreated email={createdWithEmail} />;

  return (
    <>
      <Head>
        <title>Create account | Set Multiplayer</title>
      </Head>
      <Card className=" m-auto w-full max-w-md flex flex-col gap-3">
        <CreateAccountForm handleCreated={handleCreated} />
      </Card>
    </>
  );
}
