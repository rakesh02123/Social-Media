import DividerCom from "@/components/DividerCom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { ArrowLeft, MoveLeft } from "lucide-react";

const signin = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="">
          <CardHeader className="flex justify-center items-center gap-7 min-w-[380px] max-w-[380px] px-5">
            <div className="text-xl">Sign In</div>
            <div className="text-xl">|</div>
            <Link className="text-black" href="/signup">
              <div className="text-xl">Sign Up</div>
            </Link>
          </CardHeader>
          <Divider />
          <CardBody className="min-w-[380px] gap-3.5 min-h-[320px] flex justify-center px-5">
            {/* <Divider /> */}
            <div className="space-y-2">
              <div className="text-2xl font-medium">Sign In Your Account</div>
              <div className="flex gap-1">
                <DividerCom />
              </div>
            </div>
            <div className="">You are now logged out.</div>
            <Input label="Username" color="primary" />
            <Input label="Password" color="primary" />
            <Button size="lg" color="primary" variant="ghost">
              Sign In
            </Button>
          </CardBody>
          <Divider />

          <CardFooter className="flex justify-between min-w-[380px] max-w-[380px] px-5">
            <Link href="/forgotpassword">
              <div className="text-black/80 hover:text-blue-700">
                Lost Your password ?
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

export default signin;
