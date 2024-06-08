import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import Link from 'next/link'
import Image from "next/image";
import clsx from 'clsx'
import { ArrowRightCircleIcon, Check } from 'lucide-react'

export default function Home() {
  return (
    <>
      <NavBar/>
      <section>
        <div className="flex flex-col justify-center items-center mt-[80px] gap-4">
          <span className="text-orange bg-orange/20 rounded-full p-3"> Ai powered sales assistance Chatbot </span>
          <Image
          src="/images/solo-manager-logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
        <p className="text-center max-w-[500px]">
            Your AI powered sales assistant! Embed Corinna AI into any website
            with just a snippet of code!
          </p>
          <Button className="bg-orange font-bold text-white px-4">
            Start For Free
          </Button>
          <Image
          src="/images/iphonecorinna.png"
          alt="LOGO"
          width={200}
          height={100}
          className="max-w-lg object-contain"
        />
        </div>

      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </section>
      <section>
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/ month</span>              
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      </section>
    </>
  );
}
