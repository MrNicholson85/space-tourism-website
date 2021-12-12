import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const BgImag = styled.div`
  background-image: url('space-tourism/src/images/home/background-home-desktop.jpg');
  background-size: cover;

`

export default function Home() {
  return (
    <Layout>
      <section>
        <span>So, you want to travel to</span>
        <h1>Space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </section>
    </Layout>
  )
}
