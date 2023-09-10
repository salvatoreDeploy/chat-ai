"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ScrollArea } from "./ui/scroll-area";

interface ChatProps {}

export default function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <Card className="w-[480px]  grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Usando Vercel SDK para criar um chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea className=" w-full h-[780px] space-y-4 pr-4 ">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-2 text-slate-800 text-sm mb-6"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>HJ</AvatarFallback>
                    <AvatarImage src="https://github.com/salvatoreDeploy.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>HJ</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === "user" ? "Cliente" : "Atendente"}
                  </span>
                  {message.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>

        {/*  <div className="flex gap-2 text-slate-800 text-sm">
          <Avatar>
            <AvatarFallback>HJ</AvatarFallback>
            <AvatarImage src="https://github.com/rocketseat.png" />
          </Avatar>
          <p className="leading-relaxed">
            <span className="block font-bold text-slate-800">
              Atendente AI:
            </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            laboriosam provident repudiandae facere veritatis accusamus ipsam
            nihil?
          </p>
        </div> */}
      </CardContent>

      <CardFooter>
        <form action="" className="w-full flex  gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso ajuda-lo? "
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
