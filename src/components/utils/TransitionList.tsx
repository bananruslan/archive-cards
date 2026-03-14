import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

export function TransitionList({ children }: React.PropsWithChildren) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

export function TransitionItem({
  children,
  ...props
}: React.PropsWithChildren<{ id: string }>) {
  return (
    <motion.div
      layoutId={`list-item-${props.id}`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ type: "tween", duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
