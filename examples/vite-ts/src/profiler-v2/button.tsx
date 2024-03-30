import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react"
import { styles } from "@chakra-ui/theme/styles"
import { ComponentProps } from "react"

export type ButtonVariants = {
  variant?: "brand" | "critical" | "neutral"
  size?: "sm" | "md" | "lg"
}

// ThemingProps<"Button">
interface ButtonProps extends HTMLChakraProps<"div">, ButtonVariants {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const styles = useStyleConfig("Button", props)
    return <chakra.button ref={forwardedRef} {...props} __css={styles} />
  },
)

Button.displayName = "Button"
