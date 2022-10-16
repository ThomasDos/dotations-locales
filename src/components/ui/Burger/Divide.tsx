import type { FunctionComponent } from "react";

import type { CommonBurgerProps } from ".";
import { Burger } from "./Burger";

export const Divide = (props => (
    <Burger
        {...props}
        render={o => (
            <div
                className="hamburger-react"
                aria-label={o.label}
                aria-expanded={o.isToggled}
                data-testid="divide"
                onClick={o.handler}
                onKeyUp={e => {
                    if (e.key === "Enter") o.handler();
                }}
                role="button"
                style={o.burgerStyles}
                tabIndex={0}
            >
                <div
                    style={{
                        ...o.barStyles,
                        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
                        top: `${o.topOffset}px`,
                        transform: `${
                            o.isToggled
                                ? `translate(${o.move * 0.48}px, ${
                                      o.move * 0.73
                                  }px) rotate(45deg)`
                                : "none"
                        }`,
                        transition: `${o.time}s ${o.easing}`,
                        width: `${o.width / 2}px`,
                    }}
                />

                <div
                    style={{
                        ...o.barStyles,
                        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
                        left: "50%",
                        top: `${o.topOffset}px`,
                        transform: `${
                            o.isToggled
                                ? `translate(-${o.move * 0.48}px, ${
                                      o.move * 0.73
                                  }px) rotate(-45deg)`
                                : "none"
                        }`,
                        transition: `${o.time}s ${o.easing}`,
                        width: `${o.width / 2}px`,
                    }}
                />

                <div
                    style={{
                        ...o.barStyles,
                        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
                        opacity: o.isToggled ? 0 : 1,
                        top: `${o.topOffset + o.barHeight + o.margin}px`,
                        transform: `${
                            o.isToggled
                                ? `translate(${-o.move * 1.25}px, 0)`
                                : "none"
                        }`,
                        transition: `${o.time}s ${o.easing}`,
                        width: `${o.width / 2}px`,
                    }}
                />

                <div
                    style={{
                        ...o.barStyles,
                        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
                        left: "50%",
                        opacity: o.isToggled ? 0 : 1,
                        top: `${o.topOffset + o.barHeight + o.margin}px`,
                        transform: `${
                            o.isToggled
                                ? `translate(${o.move * 1.25}px, 0)`
                                : "none"
                        }`,
                        transition: `${o.time}s ${o.easing}`,
                        width: `${o.width / 2}px`,
                    }}
                />

                <div
                    style={{
                        ...o.barStyles,
                        borderRadius: `${o.barStyles.borderRadius} 0 0 ${o.barStyles.borderRadius}`,
                        top: `${
                            o.topOffset + o.barHeight * 2 + o.margin * 2
                        }px`,
                        transform: `${
                            o.isToggled
                                ? `translate(${o.move * 0.48}px, -${
                                      o.move * 0.73
                                  }px) rotate(-45deg)`
                                : "none"
                        }`,
                        transition: `${o.time}s ${o.easing}`,
                        width: `${o.width / 2}px`,
                    }}
                />

                <div
                    style={{
                        ...o.barStyles,
                        borderRadius: `0 ${o.barStyles.borderRadius} ${o.barStyles.borderRadius} 0`,
                        left: "50%",
                        top: `${
                            o.topOffset + o.barHeight * 2 + o.margin * 2
                        }px`,
                        transform: `${
                            o.isToggled
                                ? `translate(-${o.move * 0.48}px, -${
                                      o.move * 0.73
                                  }px) rotate(45deg)`
                                : "none"
                        }`,
                        transition: `${o.time}s ${o.easing}`,
                        width: `${o.width / 2}px`,
                    }}
                />
            </div>
        )}
    />
)) as FunctionComponent<CommonBurgerProps>;
