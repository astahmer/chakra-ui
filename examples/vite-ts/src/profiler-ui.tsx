import { ChakraProvider, ThemeOverride, extendTheme } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { RandomizedButtons } from "./profiler-v2/randomized-buttons"
import { Profiler } from "./profiler-wrapper"

const instances = 1000

const customTheme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "bold",
        fontFamily: "sans",
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
      variants: {
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
      defaultProps: {
        size: "md",
        variant: "brand",
      },
    },
  },
} as ThemeOverride)

export default function App() {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        {/* <CvaButtonProfiler /> */}
        <CvaButtonRerenderer />
      </ChakraProvider>
    </>
  )
}

const CvaButtonProfiler = () => {
  const [key, setKey] = useState(null)
  return (
    <Profiler
      name="chakra-v2"
      id="chakra-v2"
      onRerender={(newKey: any) => setKey(newKey)}
    >
      <RandomizedButtons key={key} instances={instances} />
    </Profiler>
  )
}

const CvaButtonRerenderer = () => {
  const [key, setKey] = useState(0)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const interval = setInterval(() => {
      setKey(Math.random())
    }, 20)

    return () => {
      clearInterval(interval)
    }
  }, [enabled])

  return (
    <>
      <div style={{ padding: "50px" }}>
        <button onClick={() => setEnabled(!enabled)}>Toggle</button>
      </div>

      <RandomizedButtons key={key} instances={instances} />
      {/* <Profiler
        name="chakra-v2"
        id="chakra-v2"
        onRerender={(newKey: any) => setKey(newKey)}
      >
        <RandomizedButtons key={key} instances={instances} />
      </Profiler> */}
    </>
  )
}
