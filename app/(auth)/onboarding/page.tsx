"use client";
import { FC, useState } from "react";
import UserDetails from "@/components/form/UserDetails";
import UserSkills from "@/components/form/UserSkills";
import { z } from "zod";
import { UserDetailsValidation, UserSkillsValidation } from "@/lib/validation";

interface pageProps {}

const Page: FC<pageProps> = () => {
  const [step, setStep] = useState(1); // 1: Personal Info, 2: Options Selection

  const handlePersonalInfoSubmit = (
    values: z.infer<typeof UserDetailsValidation>
  ) => {
    // Handle personal info submission
    console.log(values);
    setStep(2); // Proceed to options selection step
  };

  const handleOptionsSubmit = (
    values: z.infer<typeof UserSkillsValidation>
  ) => {
    // Handle options selection submission
    console.log(values);

    // Redirect or perform any necessary action after onboarding completion
  };

  return (
    <>
      <h1 className="text-2xl font-bold md:text-3xl md:font-extrabold">
        Let&apos;s fill and pick information
      </h1>
      <div className="flex-center mt-10 h-full md:mt-16">
        {step === 1 && <UserDetails onSubmit={handlePersonalInfoSubmit} />}
        {step === 2 && (
          <UserSkills
            // options={["Option 1", "Option 2", "Option 3"]}
            onSubmit={handleOptionsSubmit}
          />
        )}
      </div>
    </>
  );
};

export default Page;
