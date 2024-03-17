import SignUpForm from "@/components/form/SignUpForm";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = () => {
  return (
    <div className="flex flex-col gap-3">
      <SignUpForm />
    </div>
  );
};

export default Page;
