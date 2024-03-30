import { chakra } from "@chakra-ui/react"

export const Button = chakra("button", {
  base: {
    borderRadius: "md",
    fontWeight: "bold",
    fontFamily: "sans",
  },
  variants: {
    disabled: {
      true: {},
      false: {},
    },
    size: {
      sm: {
        paddingX: "2",
        paddingY: "1",
      },
      md: {
        paddingX: "4",
        paddingY: "2",
      },
      lg: {
        paddingX: "5",
        paddingY: "4",
      },
    },
    tone: {
      brand: {
        backgroundColor: "blue.600",
        borderWidth: "0",
        color: "white",
      },
      critical: {
        backgroundColor: "red.600",
        borderWidth: "0",
        color: "white",
      },
      neutral: {
        backgroundColor: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "gray.400",
        color: "gray.800",
      },
    },
  },
  defaultVariants: {
    disabled: false,
    size: "md",
    tone: "brand",
  },
})
