"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function page() {
  const ScrollRef = useRef(null);
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });
    gsap.fromTo(
      "#red-box",
      { x: 0, rotation: 0, borderRadius: "0%" },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        duration: 2,
        ease: "elastic",
        borderRadius: "100%",
      }
    );
  }, []);

  const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "power4.out",
    });
    timeline.to("#yellow-box", {
      y: 250,
      scale: 2,
      rotation: 360,
      duration: 2,
    });
    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "bounce.out",
    });
  }, []);

  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(ScrollRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 50 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 1.5,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            ease: "power1.inOut",
          },
        });
      });
    },
    { scope: ScrollRef },
    []
  );

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <div className="flex flex-col gap-4 p-4 container mx-auto overflow-hidden">
      <div className="flex flex-col gap-4">
        <p>gsap to</p>
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
      </div>
      <div className="flex flex-col gap-4">
        <p>gsap from</p>
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg"></div>
      </div>
      <div className="flex flex-col gap-4">
        <p>gsap fromto</p>
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"></div>
      </div>
      <div className="flex flex-col gap-4">
        <p>gsap timeline</p>
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="border-yellow-500 px-4 py-2 border mx-auto cursor-pointer"
        >
          Play/pause
        </button>
        <div
          id="yellow-box"
          className="w-20 h-20 bg-yellow-500 rounded-lg"
        ></div>
      </div>
      <div className="flex flex-col gap-4">
        <p>gsap stagger</p>
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-99">
        <p>gsap scrollTrigger</p>
        <div className="w-full" ref={ScrollRef}>
          <div
            id="scroll-pink"
            className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
          ></div>
          <div
            id="scroll-orange"
            className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
          ></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>gsap text</p>
        <div id="text" className="opacity-0 translate-y-10">
          Gsap text lol
        </div>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora
          quibusdam illo repudiandae deserunt. Ea enim doloribus, quis, non
          necessitatibus, beatae laudantium esse rerum molestiae numquam hic
          inventore reprehenderit fuga!
        </p>{" "}
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio tempora
          quibusdam illo repudiandae deserunt. Ea enim doloribus, quis, non
          necessitatibus, beatae laudantium esse rerum molestiae numquam hic
          inventore reprehenderit fuga!
        </p>
      </div>
    </div>
  );
}
