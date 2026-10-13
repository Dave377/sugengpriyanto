import * as React from "react"

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
}

function Accordion({ className, ...props }: AccordionProps) {
  return <div className={className} {...props} />
}

type AccordionItemProps = React.ComponentPropsWithoutRef<"details"> & {
  value?: string
}

function AccordionItem({ className, value, ...props }: AccordionItemProps) {
  void value
  return <details className={className} {...props} />
}

function AccordionTrigger({ className, children, ...props }: React.ComponentPropsWithoutRef<"summary">) {
  return (
    <summary className={className} {...props}>
      {children}
    </summary>
  )
}

function AccordionContent({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={className} {...props} />
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
