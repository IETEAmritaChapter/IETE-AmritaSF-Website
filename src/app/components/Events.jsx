"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import Image from "next/image";

import eventsData from "/public/content/Events.json";

gsap.registerPlugin(Draggable);

export default function Events() {
  const [events, setEvents] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    
    setEvents(eventsData.events);

  }, []);

  useEffect(() => {
    if (events.length > 0) {
      initSlider();
    }

    function initSlider() {
      const wrapper = document.querySelector('[data-slider="list"]');
      const slides = gsap.utils.toArray('[data-slider="slide"]');

      const nextButton = document.querySelector('[data-slider="button-next"]');
      const prevButton = document.querySelector('[data-slider="button-prev"]');

      const totalElement = document.querySelector('[data-slide-count="total"]');
      const stepElement = document.querySelector('[data-slide-count="step"]');
      const stepElementMonth = document.querySelector(
        '[data-slide-count="step-month"]'
      );
      const stepElementDate = document.querySelector(
        '[data-slide-count="step-date"]'
      );
      const stepElementTitle = document.querySelector(
        '[data-slide-count="step-title"]'
      );
      const stepElementDescription = document.querySelector(
        '[data-slide-count="step-description"]'
      );

      const stepElementLocation = document.querySelector(
        '[data-slide-count="step-location"]'
      );
      const stepElementTime = document.querySelector(
        '[data-slide-count="step-time"]'
      );
      const stepElementRegistration = document.querySelector(
        '[data-slide-count="step-registration"]'
      );

      const stepsParentTitle = stepElementTitle.parentElement;

      const stepsParentLocation = stepElementLocation?.parentElement;
      const stepsParentTime = stepElementTime?.parentElement;
      const stepsParentRegistration = stepElementRegistration?.parentElement;
      const stepsParentDescription = stepElementDescription?.parentElement;
      if (stepsParentTitle) stepsParentTitle.innerHTML = "";

      if (stepsParentLocation) stepsParentLocation.innerHTML = "";
      if (stepsParentTime) stepsParentTime.innerHTML = "";
      stepsParentRegistration.innerHTML = "";
      if (stepsParentDescription) stepsParentDescription.innerHTML = "";

      const stepsParent = stepElement.parentElement;
      const stepsParentMonth = stepElementMonth.parentElement;
      const stepsParentDate = stepElementDate.parentElement;

      if (stepsParent) stepsParent.innerHTML = "";
      if (stepsParentMonth) stepsParentMonth.innerHTML = "";
      if (stepsParentDate) stepsParentDate.innerHTML = "";

      let activeElement;
      const totalSlides = slides.length;

      // If you'd like to show total slides:
      // if (totalElement) {
      //   totalElement.textContent =
      //     totalSlides < 10 ? `0${totalSlides}` : totalSlides;
      // }

      slides.forEach((_, index) => {
        const stepClone = stepElement.cloneNode(true);
        const stepCloneMonth = stepElementMonth.cloneNode(true);
        const stepCloneDate = stepElementDate.cloneNode(true);
        const titleClone = stepElementTitle.cloneNode(true);
        const locationClone = stepElementLocation.cloneNode(true);
        const timeClone = stepElementTime.cloneNode(true);
        const descriptionClone = stepElementDescription.cloneNode(true);

        // Registration link if present

        const registrationClone = stepElementRegistration.cloneNode(true);
        registrationClone.href = events[index].registration;
        registrationClone.textContent = events[index].Completed !== "Past Event" ? "Click here to register" : "";
        stepsParentRegistration.appendChild(registrationClone);

        // Insert data
        stepClone.textContent = events[index].Year;
        stepCloneMonth.textContent = events[index].Month;
        stepCloneDate.textContent = events[index].Date;

        titleClone.innerHTML = `${events[index].title}`;
        locationClone.textContent = `Location : ${events[index].location}`;
        timeClone.textContent = `Time : ${events[index].time}`;
        descriptionClone.textContent = `${events[index].description}`;

        // Append clones
        stepsParent?.appendChild(stepClone);
        stepsParentMonth?.appendChild(stepCloneMonth);
        stepsParentDate?.appendChild(stepCloneDate);
        stepsParentTitle?.appendChild(titleClone);
        stepsParentDescription?.appendChild(descriptionClone);

        stepsParentLocation?.appendChild(locationClone);
        stepsParentTime?.appendChild(timeClone);
      });

      // Collect newly created dynamic elements
      const allSteps = stepsParent?.querySelectorAll(
        '[data-slide-count="step"]'
      );
      const allStepsMonth = stepsParentMonth?.querySelectorAll(
        '[data-slide-count="step-month"]'
      );
      const allStepsDate = stepsParentDate?.querySelectorAll(
        '[data-slide-count="step-date"]'
      );
      const allStepsTitle = stepsParentTitle?.querySelectorAll(
        '[data-slide-count="step-title"]'
      );

      const allStepsDescription = stepsParentDescription?.querySelectorAll(
        '[data-slide-count="step-description"]'
      );

      const allStepsLocation = stepsParentLocation?.querySelectorAll(
        '[data-slide-count="step-location"]'
      );
      const allStepsTime = stepsParentTime?.querySelectorAll(
        '[data-slide-count="step-time"]'
      );
      const allStepsRegistration = stepsParentRegistration?.querySelectorAll(
        '[data-slide-count="step-registration"]'
      );

      const loop = horizontalLoop(slides, {
        paused: true,
        draggable: true,
        center: false,
        onChange: (element, index) => {
          // Mark the next as active
          activeElement && activeElement.classList.remove("active");
          const nextSibling = element.nextElementSibling || slides[0];
          nextSibling.classList.add("active");
          activeElement = nextSibling;
          setActiveEventIndex(index);

          // Animate the dynamic elements
          if (allSteps) {
            gsap.to(allSteps, {
              y: `${-100 * index}%`,
              ease: "power3",
              duration: 0.45,
              delay: 0.1,
            });
          }

          if (allStepsMonth) {
            gsap.to(allStepsMonth, {
              y: `${-100 * index}%`,
              ease: "power3",
              duration: 0.45,
              delay: 0.2,
            });
          }
          if (allStepsDate) {
            gsap.to(allStepsDate, {
              y: `${-100 * index}%`,
              ease: "power3",
              duration: 0.45,
              delay: 0.3,
            });
          }
          if (allStepsTitle) {
            gsap.to(allStepsTitle, {
              y: `${-100 * index}%`,
              ease: "power3.inOut",
              duration: 0.6,
              delay: 0.4,
            });
          }
          if (allStepsDescription) {
            gsap.to(allStepsDescription, {
              y: `${-100 * index}%`,
              ease: "power3",
              duration: 0.6,
              delay: 0.5,
            });
          }

          if (allStepsLocation) {
            gsap.to(allStepsLocation, {
              y: `${-100 * index}%`,
              ease: "power3.inOut",
              duration: 0.6,
              delay: 0.6,
            });
          }
          if (allStepsTime) {
            gsap.to(allStepsTime, {
              y: `${-100 * index}%`,
              ease: "power3.inOut",
              duration: 0.6,
              delay: 0.7,
            });
          }
          if (allStepsRegistration) {
            gsap.to(allStepsRegistration, {
              y: `${-100 * index}%`,
              ease: "power3.inOut",
              duration: 0.6,
              delay: 0.8,
            });
          }

          // Fade in the newly visible elements
          gsap.fromTo(
            [
              allStepsTitle?.[index],
              allStepsDescription?.[index],
              allStepsRegistration?.[index],
              allStepsLocation?.[index],
              allStepsTime?.[index],
            ].filter((el) => el),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              duration: 0.4,
              delay: 0.4,
              stagger: 0.1,
            }
          );
        },
      });

      slides.forEach((slide, i) =>
        slide.addEventListener("click", () =>
          loop.toIndex(0, { ease: "power3", duration: 0.725 })
        )
      );

      nextButton.addEventListener("click", () =>
        loop.next({ ease: "power3", duration: 0.725 })
      );
      prevButton.addEventListener("click", () =>
        loop.previous({ ease: "power3", duration: 0.725 })
      );

      function horizontalLoop(items, config) {
        let timeline;
        items = gsap.utils.toArray(items);
        config = config || {};
        gsap.context(() => {
          let onChange = config.onChange,
            lastIndex = 0,
            tl = gsap.timeline({
              repeat: config.repeat,
              onUpdate:
                onChange &&
                function () {
                  let i = tl.closestIndex();
                  if (lastIndex !== i) {
                    lastIndex = i;
                    onChange(items[i], i);
                  }
                },
              paused: config.paused,
              defaults: { ease: "none" },
              onReverseComplete: () =>
                tl.totalTime(tl.rawTime() + tl.duration() * 100),
            }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            spaceBefore = [],
            xPercents = [],
            curIndex = 0,
            indexIsDirty = false,
            center = config.center,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap =
              config.snap === false
                ? (v) => v
                : gsap.utils.snap(config.snap || 1),
            timeOffset = 0,
            container =
              center === true
                ? items[0].parentNode
                : gsap.utils.toArray(center)[0] || items[0].parentNode,
            totalWidth,
            getTotalWidth = () =>
              items[length - 1].offsetLeft +
              (xPercents[length - 1] / 100) * widths[length - 1] -
              startX +
              spaceBefore[0] +
              items[length - 1].offsetWidth *
                gsap.getProperty(items[length - 1], "scaleX") +
              (parseFloat(config.paddingRight) || 0),
            populateWidths = () => {
              let b1 = container.getBoundingClientRect(),
                b2;
              items.forEach((el, i) => {
                widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(
                  (parseFloat(gsap.getProperty(el, "x", "px")) / widths[i]) *
                    100 +
                    gsap.getProperty(el, "xPercent")
                );
                b2 = el.getBoundingClientRect();
                spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
                b1 = b2;
              });
              gsap.set(items, {
                xPercent: (i) => xPercents[i],
              });
              totalWidth = getTotalWidth();
            },
            timeWrap,
            populateOffsets = () => {
              timeOffset = center
                ? (tl.duration() * (container.offsetWidth / 2)) / totalWidth
                : 0;
              center &&
                times.forEach((t, i) => {
                  times[i] = timeWrap(
                    tl.labels["label" + i] +
                      (tl.duration() * widths[i]) / 2 / totalWidth -
                      timeOffset
                  );
                });
            },
            getClosest = (values, value, wrap) => {
              let i = values.length,
                closest = 1e10,
                index = 0,
                d;
              while (i--) {
                d = Math.abs(values[i] - value);
                if (d > wrap / 2) {
                  d = wrap - d;
                }
                if (d < closest) {
                  closest = d;
                  index = i;
                }
              }
              return index;
            },
            populateTimeline = () => {
              tl.clear();
              for (let i = 0; i < length; i++) {
                let item = items[i],
                  curX = (xPercents[i] / 100) * widths[i],
                  distanceToStart =
                    item.offsetLeft + curX - startX + spaceBefore[0],
                  distanceToLoop =
                    distanceToStart +
                    widths[i] * gsap.getProperty(item, "scaleX");
                tl.to(
                  item,
                  {
                    xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                    duration: distanceToLoop / pixelsPerSecond,
                  },
                  0
                )
                  .fromTo(
                    item,
                    {
                      xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                      ),
                    },
                    {
                      xPercent: xPercents[i],
                      duration:
                        (curX - distanceToLoop + totalWidth - curX) /
                        pixelsPerSecond,
                      immediateRender: false,
                    },
                    distanceToLoop / pixelsPerSecond
                  )
                  .add("label" + i, distanceToStart / pixelsPerSecond);
                times[i] = distanceToStart / pixelsPerSecond;
              }
              timeWrap = gsap.utils.wrap(0, tl.duration());
            },
            refresh = (deep) => {
              let progress = tl.progress();
              tl.progress(0, true);
              populateWidths();
              deep && populateTimeline();
              populateOffsets();
              deep && tl.draggable
                ? tl.time(times[curIndex], true)
                : tl.progress(progress, true);
            },
            onResize = () => refresh(true),
            proxy;
          gsap.set(items, { x: 0 });
          populateWidths();
          populateTimeline();
          populateOffsets();
          window.addEventListener("resize", onResize);

          function toIndex(index, vars) {
            vars = vars || {};
            Math.abs(index - curIndex) > length / 2 &&
              (index += index > curIndex ? -length : length);
            let newIndex = gsap.utils.wrap(0, length, index),
              time = times[newIndex];
            if (time > tl.time() !== index > curIndex && index !== curIndex) {
              time += tl.duration() * (index > curIndex ? 1 : -1);
            }
            if (time < 0 || time > tl.duration()) {
              vars.modifiers = { time: timeWrap };
            }
            curIndex = newIndex;
            vars.overwrite = true;
            gsap.killTweensOf(proxy);
            return vars.duration === 0
              ? tl.time(timeWrap(time))
              : tl.tweenTo(time, vars);
          }

          tl.toIndex = (index, vars) => toIndex(index, vars);
          tl.closestIndex = (setCurrent) => {
            let index = getClosest(times, tl.time(), tl.duration());
            if (setCurrent) {
              curIndex = index;
              indexIsDirty = false;
            }
            return index;
          };
          tl.current = () => (indexIsDirty ? tl.closestIndex(true) : curIndex);
          tl.next = (vars) => toIndex(tl.current() + 1, vars);
          tl.previous = (vars) => toIndex(tl.current() - 1, vars);
          tl.times = times;
          tl.progress(1, true).progress(0, true);
          if (config.reversed) {
            tl.vars.onReverseComplete();
            tl.reverse();
          }
          if (config.draggable && typeof Draggable === "function") {
            proxy = document.createElement("div");
            let wrap = gsap.utils.wrap(0, 1),
              ratio,
              startProgress,
              draggable,
              dragSnap,
              lastSnap,
              initChangeX,
              wasPlaying,
              align = () =>
                tl.progress(
                  wrap(startProgress + (draggable.startX - draggable.x) * ratio)
                ),
              syncIndex = () => tl.closestIndex(true);

            draggable = Draggable.create(proxy, {
              trigger: items[0].parentNode,
              type: "x",
              onPressInit() {
                let x = this.x;
                gsap.killTweensOf(tl);
                wasPlaying = !tl.paused();
                tl.pause();
                startProgress = tl.progress();
                refresh();
                ratio = 1 / totalWidth;
                initChangeX = startProgress / -ratio - x;
                gsap.set(proxy, { x: startProgress / -ratio });
              },
              onDrag: align,
              onThrowUpdate: align,
              overshootTolerance: 0,
              snap(value) {
                if (Math.abs(startProgress / -ratio - this.x) < 10) {
                  return lastSnap + initChangeX;
                }
                let time = -(value * ratio) * tl.duration(),
                  wrappedTime = timeWrap(time),
                  snapTime =
                    times[getClosest(times, wrappedTime, tl.duration())],
                  dif = snapTime - wrappedTime;
                Math.abs(dif) > tl.duration() / 2 &&
                  (dif += dif < 0 ? tl.duration() : -tl.duration());
                lastSnap = (time + dif) / tl.duration() / -ratio;
                return lastSnap;
              },
              onRelease() {
                syncIndex();
                draggable.isThrowing && (indexIsDirty = true);
              },
              onThrowComplete: () => {
                syncIndex();
                wasPlaying && tl.play();
              },
            })[0];
            tl.draggable = draggable;
          }
          tl.closestIndex(true);
          lastIndex = curIndex;
          onChange && onChange(items[curIndex], curIndex);
          timeline = tl;
          return () => window.removeEventListener("resize", onResize);
        });
        return timeline;
      }
    }
  }, [events]);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <div className="cloneable">
        <div className="overlay">
          <div className="overlay-inner">
            <div className="overlay-count-row">
              <div className="count-column">
                <h2 data-slide-count="step-date" className="count-heading"></h2>
              </div>
              <div className="count-row-divider"></div>
              <div className="count-column">
                <h2 data-slide-count="step-month" className="count-heading"></h2>
              </div>
              <div className="count-row-divider"></div>
              <div className="count-column">
                <h2 data-slide-count="step" className="count-heading"></h2>
              </div>
            </div>
            <b>
              <div className="count-column">
                <h1 data-slide-count="step-title" className="count-heading"></h1>
              </div>
            </b>
            <div 
              className="description-container"
              style={{
                height: "60%",
                position: "relative",
                overflow: "hidden",
                width: "60%",
                fontSize: "15px",
                marginBottom: "20px",
                overflow: "hidden",
              }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  style={{
                    transition: "opacity 0.9s ease-in-out, transform 0.9s ease-in-out",
                    height: "700px",
                    width: "100%",
                    opacity: activeEventIndex === index ? 1 : 0,
                    visibility: activeEventIndex === index ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    overflow: "hidden",
                    transform: `translateY(${activeEventIndex === index ? 0 : 20}px)`,
                    paddingBottom: "30px"
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      overflowY: "hidden",
                      paddingRight: "10px"
                    }}
                  >
                    <p
                      className="description-text"
                      data-slide-count="step-description"
                      style={{
                        margin: 0,
                        lineHeight: "1.5",
                        maxHeight: readMore && activeEventIndex === index ? "100px" : "550px",
                        overflow: "hidden"
                      }}
                    >
                      {event.description}
                    </p>
                  </div>
                  {event.description?.length > 200 && activeEventIndex === index && (
                    <button
                      onClick={toggleReadMore}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        background: "transparent",
                        border: "none",
                        color: "#007bff",
                        cursor: "pointer",
                        padding: "5px 0",
                        width: "100%",
                        textAlign: "left"
                      }}
                    >
                      {readMore ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="count-column-location"> 
                <h2 data-slide-count="step-location" className="count-heading"></h2>
            </div>
            <div className="count-column-location">
              <h3 data-slide-count="step-time" className="count-heading "></h3>
            </div>
            <div className="count-column-location ">
              <a  href="#!" target="_blank" rel="noopener noreferrer" >
                <h3 className="count-heading register-button" data-slide-count="step-registration"></h3>
              </a>
            </div>
            <div className="overlay-nav-row">
              <button aria-label="previous slide" data-slider="button-prev" className="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow">
                  <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
                </svg>
                <div className="button-overlay">
                  <div className="overlay-corner"></div>
                  <div className="overlay-corner top-right"></div>
                  <div className="overlay-corner bottom-left"></div>
                  <div className="overlay-corner bottom-right"></div>
                </div>
              </button>
              <button aria-label="next slide" data-slider="button-next" className="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow next">
                  <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
                </svg>
                <div className="button-overlay">
                  <div className="overlay-corner"></div>
                  <div className="overlay-corner top-right"></div>
                  <div className="overlay-corner bottom-left"></div>
                  <div className="overlay-corner bottom-right"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="slider-wrap">
            <div data-slider="list" className="slider-list">
              {[
                ...events.slice(events.length - 1, events.length),
                ...events.slice(0, events.length - 1),
              ].map((event, index) => (
                <div
                  key={event.id}
                  data-slider="slide"
                  className={`slider-slide ${index === 0 ? "active" : ""}`}
                >
                  <div className="slide-inner">
                    <Image
                      src={event.image}
                      loading="lazy"
                      alt={event.title}
                      width={560}
                      height={315}
                      className="object-cover"
                    />
                    <div className="slide-caption">
                      <div className="caption-dot"></div>
                      <p className="caption">{event.title}</p>
                      <p className="caption">({event.Completed})</p>
                    </div>  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}