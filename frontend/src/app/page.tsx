// import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FormatterSelector from "@/components/formatter/formatterSelector"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col px-24 py-12">
      { /* <Header /> */ }
      <FormatterSelector />
      <Footer />
    </main>
  )
}
