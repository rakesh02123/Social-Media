import DividerCom from "@/components/DividerCom";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Button,
  Input,
  Link,
  DatePicker,
  RadioGroup,
  Radio,
  SelectItem,
  Select,
  CardFooter,
} from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";

const signup = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Card className="">
          <CardHeader className="flex justify-center items-center gap-7 min-w-[380px] max-w-[380px] px-5">
            <Link className="text-black" href="/signin">
              <div className="text-xl">Sign In</div>
            </Link>
            <div className="text-xl">|</div>

            <div className="text-xl">Sign Up</div>
          </CardHeader>
          <Divider />
          <CardBody className="min-w-[380px] max-w-[380px] max-h-[450px] gap-3.5 content-center px-5 grid grid-cols-2">
            <div className="space-y-2 col-span-2">
              <div className="text-2xl font-medium">Create Your Account</div>
              <div className="flex gap-1">
                <DividerCom />
              </div>
            </div>
            <div className="col-span-2">It's quick and easy.</div>

            <Input
              className="col-span-2"
              label="Name"
              color="primary"
              type="text"
            />
            <Input
              className="col-span-2"
              label="Number"
              color="primary"
              type="number"
            />
            <Input
              className="col-span-2"
              label="Password"
              color="primary"
              type="password"
            />
            <DatePicker
              className="col-span-1"
              label="Birth Date"
              color="primary"
            />

            <Select className="col-span-1" label="Gender" color="primary">
              <SelectItem key="male">Male</SelectItem>
              <SelectItem key="female">Female</SelectItem>
              <SelectItem key="others">Others</SelectItem>
            </Select>
            <Button
              className="col-span-2"
              size="lg"
              color="primary"
              variant="ghost"
            >
              Sign Up
            </Button>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-center items-center min-w-[380px] max-w-[380px] px-5">
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

export default signup;
