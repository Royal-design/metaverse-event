import barCode from "../assets/barcode.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { resetForm } from "@/redux/slice/formSlice";
import { DottedLine } from "./DottedLine";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const MyTicket = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.form);

  useEffect(() => {
    if (!user.name || !user.email || !user.ticketType) {
      navigate("/generate-ticket");
    }
  }, [user, navigate]);

  const downloadTicketPdf = async () => {
    const ticketElement = document.getElementById("ticket-information");

    if (!ticketElement) return;

    try {
      const canvas = await html2canvas(ticketElement, {
        scale: 3,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [canvas.width * 0.2645, canvas.height * 0.2645]
      });

      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.width,
        pdf.internal.pageSize.height
      );
      pdf.save("ticket.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[700px] max-md:w-full max-md:mt-[30px] p-[48px] max-md:py-[32px]  max-md:px-[24px] gap-[32px] border border-border-heavy bg-gradient-to-br from-black to-background-heavy rounded-[24px]">
      <div className="flex flex-col items-start gap-[12px]  w-full">
        <div className=" max-md:hidden w-full"></div>
        <main className="flex flex-col justify-center pt-[27.5px]  max-md:pt-0 items-center gap-[32px] w-full">
          <section className="flex flex-col items-center gap-6 w-full">
            <div
              id="ticket-information"
              className="flex px-[21px] max-md:px-[17.5px] py-[32px] flex-col justify-center items-center gap-[10px] self-stretch rounded-[24px]"
            >
              <div className="w-[300px] h-full">
                <div className="relative flex flex-col justify-center items-center w-full ">
                  <div className="w-[300px] border-b-0 p-8 aspect-[1.5] border border-border-light bg-background-light mask-rounded">
                    <div className=" flex  p-[14px] items-center flex-shrink-0 rounded-[16px] border border-border-light bg-background-light backdrop-blur-[2px]">
                      <div className="flex w-full flex-col items-center gap-[20px] flex-shrink-0">
                        <article className="flex w-[175px] flex-col items-center">
                          <p className="text-white text-center font-road-rage text-[34px] font-normal leading-[100%]">
                            Metaverse Expo ”25
                          </p>
                          <div className="flex p-[4px] flex-col justify-center items-center gap-[4px]">
                            <p className="text-white font-roboto text-[10px] font-normal leading-[150%]">
                              📍 Lagos Tech Arena, Victoria Island
                            </p>
                            <p className="text-white font-roboto text-[10px] font-normal leading-[150%]">
                              📅 May 31, 2025 | 9:00 AM
                            </p>
                          </div>
                        </article>
                        <figure className="w-[140px] h-[140px] rounded-[12px] border-[4px] border-border-light bg-lightgray bg-cover bg-no-repeat bg-center">
                          <img
                            src={user.image ?? ""}
                            alt="user"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </figure>
                        <div
                          className="flex p-1 flex-col justify-center items-center  rounded-lg border border-border-light bg-background-light w-full"
                          style={{
                            wordBreak: "break-word",
                            overflowWrap: "break-word",
                            width: "100%"
                          }}
                        >
                          <div className="flex items-start gap-2 w-full border-b border-b-border-light">
                            <div className="flex p-1 flex-col justify-start  items-start gap-1 flex-1 border-r border-border-light w-full ">
                              <p className="text-white   font-roboto text-xs font-normal leading-[150%] opacity-33">
                                Enter your name
                              </p>
                              <p
                                className="text-white h-full font-roboto text-sm font-bold leading-[150%] w-full max-w-full"
                                style={{
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word"
                                }}
                              >
                                {user ? user.name : "Avi Chukwu"}
                              </p>
                            </div>
                            <div className="flex p-1 h-auto flex-col justify-start items-start gap-1 flex-1 w-full min-w-0">
                              <p className="text-white  font-roboto text-xs font-normal leading-[150%] opacity-33">
                                Enter your email *
                              </p>
                              <p
                                className="text-white h-full font-roboto text-sm font-bold leading-[150%] w-full max-w-full"
                                style={{
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word"
                                }}
                              >
                                {user ? user.email : "User@email.com"}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2 self-stretch border-b border-b-border-light w-full">
                            <div className="flex p-1 flex-col justify-center items-start gap-1 flex-1 border-r border-border-light w-full ">
                              <p className="text-white font-roboto text-xs font-normal leading-[150%] opacity-33">
                                Ticket Type:
                              </p>
                              <p
                                className="text-white font-roboto text-xs font-normal leading-[150%] w-full max-w-full"
                                style={{
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word"
                                }}
                              >
                                {user ? user.ticketType : "VIP"}
                              </p>
                            </div>
                            <div className="flex p-1 flex-col justify-center items-start gap-1 flex-1 w-full min-w-0">
                              <p className="text-white font-roboto text-xs font-normal leading-[150%] opacity-33">
                                Ticket for :
                              </p>
                              <p
                                className="text-white font-roboto text-xs font-normal leading-[150%] w-full max-w-full"
                                style={{
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word"
                                }}
                              >
                                {user ? user.ticketNumber : "1"}
                              </p>
                            </div>
                          </div>

                          <div className="flex p-2 flex-col justify-center items-start gap-1 self-stretch w-full min-w-0">
                            <p className="text-white font-roboto text-xs font-normal leading-[150%] opacity-33">
                              Special request?
                            </p>
                            <p
                              className="text-white font-roboto text-xs font-normal leading-[150%] w-full max-w-full"
                              style={{
                                wordBreak: "break-word",
                                overflowWrap: "break-word"
                              }}
                            >
                              {user
                                ? user.request
                                : "Or the user's sad story they write in here gets this whole space, Max of three rows"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[300px] mt-[-4px] border-t-0 overflow-hidden h-full border border-border-light bg-background-light mask-rounded">
                    <DottedLine />
                    <figure className="p-8 ">
                      <img src={barCode} alt="barcode" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex max-md:hidden items-start w-full font-nanum-myeongjo gap-4 flex-[1_0_0]">
              <Button
                onClick={() => {
                  dispatch(resetForm());
                  window.location.href = "/generate-ticket";
                  window.scrollTo({
                    top: 0
                  });
                }}
                className="flex bg-button-background-heavy w-full transition-colors duration-200 hover:bg-button-background-light text-white py-6 justify-center items-center gap-2 flex-1 rounded-md border border-border-light"
              >
                Book Another Ticket
              </Button>
              <Button
                onClick={downloadTicketPdf}
                className=" hover:bg-button-background-lightest text-white w-full transition-colors duration-200 flex px-6 py-6 justify-center items-center gap-2 flex-1 rounded-md bg-button-background-lighter"
              >
                Download Ticket
              </Button>
            </div>
            <div className="flex md:hidden flex-col items-start w-full font-nanum-myeongjo gap-4 flex-[1_0_0]">
              <Button
                onClick={downloadTicketPdf}
                className=" hover:bg-button-background-lightest text-white w-full transition-colors duration-200 flex px-6 py-4 justify-center items-center gap-2 flex-1 rounded-md bg-button-background-lighter"
              >
                Download Ticket
              </Button>
              <Button
                onClick={() => {
                  dispatch(resetForm());
                  window.location.href = "/generate-ticket";
                  window.scrollTo({
                    top: 0
                  });
                }}
                className="flex bg-button-background-heavy w-full transition-colors duration-200 text-white py-4 justify-center items-center gap-2 flex-1 rounded-md border border-border-light hover:bg-button-background-light"
              >
                Book Another Ticket
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
