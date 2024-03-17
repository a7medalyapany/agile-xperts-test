import SignInForm from "@/components/form/SignInForm";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = () => {
  return (
    <div className="flex flex-col gap-3">
      <SignInForm />
    </div>
  );
};

export default Page;
