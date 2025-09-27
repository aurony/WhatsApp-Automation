import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, Mail, BookOpen } from 'lucide-react';
const faqs = [
  {
    question: "How do I link a new WhatsApp account?",
    answer: "Navigate to the 'Accounts' page and click the 'Link New Account' button. Then, scan the QR code that appears using the WhatsApp application on your mobile phone (under Settings > Linked Devices)."
  },
  {
    question: "How does the AI generate responses?",
    answer: "Our system uses advanced language models to analyze incoming messages and your contact's profile. It generates context-aware, human-like responses based on this analysis. You can review and edit any AI-suggested message before sending."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, security is our top priority. All communications are end-to-end encrypted, and we adhere to strict data privacy protocols to ensure your information is always protected."
  },
  {
    question: "Can I customize the AI's personality?",
    answer: "Advanced AI customization is an enterprise feature. In the future, you will be able to train the AI on your own conversation data to match a specific tone or personality."
  }
];
export function HelpPage() {
  return (
    <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Help & Support</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><LifeBuoy className="h-5 w-5" /> Contact Support</CardTitle>
              <CardDescription>Can't find the answer you're looking for?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Our support team is here to help. Reach out to us for any technical issues or questions.</p>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-500" />
                <a href="mailto:support@nexusflow.com" className="text-blue-500 hover:underline">
                  support@nexusflow.com
                </a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> Documentation</CardTitle>
              <CardDescription>Explore our guides and resources.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Dive deeper into NexusFlow's features and best practices in our official documentation.</p>
              <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">
                Go to Docs
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}