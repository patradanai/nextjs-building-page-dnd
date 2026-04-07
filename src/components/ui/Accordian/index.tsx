import React, { createContext, useContext, useState, ReactNode } from 'react'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion' // Import framer-motion

import { cn } from '@/utils/cn'

// Define interfaces for our context and props
interface IAccordionContextType {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    id: string
}

interface IAccordionProps {
    children: ReactNode
    className?: string
}

interface IAccordionItemProps {
    children: ReactNode
    id: string
    className?: string
}

interface IAccordionHeaderProps {
    children: ReactNode
    className?: string
}

interface IAccordionContentProps {
    children: ReactNode
    className?: string
}

// Create a context for the accordion with a proper type
const AccordionContext = createContext<IAccordionContextType | undefined>(
    undefined
)

const useAccordion = () => {
    const context = useContext(AccordionContext)

    if (!context) {
        throw new Error('useAccordion must be used within an AccordionProvider')
    }

    return context
}

// Main Accordion component
const Accordion: React.FC<IAccordionProps> & {
    Item: React.FC<IAccordionItemProps>
    Header: React.FC<IAccordionHeaderProps>
    Content: React.FC<IAccordionContentProps>
} = ({ children, className = '' }) => {
    return (
        <div
            className={cn(
                'm-0 mb-3 w-full overflow-hidden rounded-md shadow-md',
                className
            )}
        >
            {children}
        </div>
    )
}

// Item component that represents a single accordion item
const Item: React.FC<IAccordionItemProps> = ({
    children,
    id,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AccordionContext.Provider value={{ isOpen, setIsOpen, id }}>
            <div className={cn('overflow-hidden bg-white', className)}>
                {children}
            </div>
        </AccordionContext.Provider>
    )
}

// Header component for the accordion item
const Header: React.FC<IAccordionHeaderProps> = ({
    children,
    className = '',
}) => {
    const { isOpen, setIsOpen } = useAccordion()

    return (
        <div
            className={cn(
                'flex cursor-pointer items-center justify-center px-5 py-2',
                className
            )}
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="w-full">{children}</span>
            <motion.span
                className="text-lg"
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <FontAwesomeIcon icon={faArrowDown} className="size-4" />
            </motion.span>
        </div>
    )
}

// Content component for the accordion item
const Content: React.FC<IAccordionContentProps> = ({
    children,
    className = '',
}) => {
    const duration = 0.3
    const { isOpen } = useAccordion()

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                            height: { duration },
                            opacity: { duration: duration * 0.8 },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            height: { duration },
                            opacity: { duration: duration * 0.2 },
                        },
                    }}
                    className={cn('overflow-hidden', className)}
                >
                    <div className="flex flex-col gap-3 p-5">{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

// Attach the sub-components to the main component
Accordion.Item = Item
Accordion.Header = Header
Accordion.Content = Content

export default Accordion
