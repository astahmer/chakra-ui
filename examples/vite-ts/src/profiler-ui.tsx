import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { RandomizedButtons } from "./profiler-v3/randomized-buttons"
import { Profiler } from "./profiler-wrapper"

const instances = 1000

export default function App() {
  return (
    <>
      <ChakraProvider value={defaultSystem}>
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
      name="chakra-v3"
      id="chakra-v3"
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
        name="chakra-v3"
        id="chakra-v3"
        onRerender={(newKey: any) => setKey(newKey)}
      >
        <RandomizedButtons key={key} instances={instances} />
      </Profiler> */}
    </>
  )
}
