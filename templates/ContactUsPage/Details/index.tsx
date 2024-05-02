import { useState } from "react";
import Field from "@/components/Field";
import Image from "@/components/Image";

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="py-20 md:pt-10 md:pb-20">
            <div className="container-lg">
                {success ? (
                    <>
                        <div className="flex items-center px-14 py-12 bg-white md:block md:px-5">
                            <div className="shrink-0 w-20 md:mb-6">
                                <Image
                                    className="w-full opacity-100"
                                    src="/images/content/check-circle.svg"
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                            </div>
                            <div className="grow pl-6 md:pl-0">
                                Thank you for reaching out to us. We have
                                received your message and a dedicated Advance
                                Camp representative will be in touch with you
                                shortly.
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <button
                                className="btn-secondary btn-lg min-w-[14.75rem] text-16m md:min-w-full"
                                onClick={() => setSuccess(false)}
                            >
                                Back to Form
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex space-x-6 md:block md:space-x-0">
                        <div className="flex-1 md:mb-20">
                            <div className="">
                                <div className="mb-4 text-h5">ADDRESS</div>
                                <div>
                                    <p>
                                    1169 Sentinel Court, Merced, CA 95340-0677
                                    </p>
                                    <p>Tel: 925-303-9689</p>
                                    <p>Mail: executivedirector@advancecamp.com</p>
                                </div>
                            </div>
                            <div className="w-23 h-0.25 my-10 bg-n-100"></div>
                            <div className="">
                                <div className="mb-4 text-h5">
                                    PRESS REQUESTS
                                </div>
                                <div>
                                    For any press request, please contact executivedirector@advancecamp.com
                                </div>
                            </div>
                            <div className="w-23 h-0.25 my-10 bg-n-100"></div>
                            <div className="">
                                <div className="mb-4 text-h5">
                                    VOLUNTEER REQUESTS
                                </div>
                                <div>
                                    Should you wish to join our team,
                                    please write to advancecampstaff@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Details;
