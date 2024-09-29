// COMPONENTS
import { ContactForm } from "@/components/Forms/ContactForm";


export default async function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-stretch w-[375px] sm:w-[450px] p-4">
      <ContactForm />
    </div>
  )
}