import DividerCom from "@/components/DividerCom";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Button,
  Input,
  Link,
  CardFooter,
} from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";

const forgotpassword = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="">
          <CardHeader className="min-w-[380px] max-w-[380px] px-5">
            Find Your Account
          </CardHeader>
          <Divider />
          <CardBody className="min-w-[380px] max-w-[380px] gap-3.5 min-h-[270px] flex justify-center px-5">
            <div className="space-y-2">
              <div className="text-2xl font-medium">Forgot Your Password</div>
              <div className="flex gap-1">
                <DividerCom />
              </div>
            </div>
            <div className="">
              Please enter your email address or mobile number to search for
              your account.
            </div>

            <Input label="Number" color="primary" />
            <Button size="lg" color="primary" variant="ghost">
              Search Account
            </Button>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between min-w-[380px] max-w-[380px] px-5">
            <Link href="/signin">
              <div className="text-black/80 hover:text-blue-700">
                Sign In Now
              </div>
            </Link>
            <Link href="/">
              <div className="flex justify-center items-center text-black/80 hover:text-blue-700">
                <ArrowLeft width={20} />
                <div>Back</div>
              </div>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default forgotpassword;
