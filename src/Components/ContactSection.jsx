import { Mail, Send } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center w-full border-t border-b border-gray-300 p-4 md:border-0">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="md:text-[1.3rem] text-[1.1rem] text-center text-muted-foreground mb-12 max-w-full mx-auto">
                    Have a question, idea, or project in mind? <span className="font-semibold text-primary">I’d love to hear from you!</span>. Feel free to reach out for collaborations, opportunities, or just to say hi.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <a href="mailto:ayushkushwaha0618@gmail.com"><Mail /></a>
                                </div>
                                <div className="text-start">
                                    <h4>Email</h4>
                                    <a href="mailto:ayushkushwaha0618@gmail.com">
                                        ayushkushwaha0618@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/20">
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/ayush-kushwaha-65650b263/" className="text-2xl"><FaLinkedin /></a>
                                </div>
                                <div className="text-start">
                                    <h4>Linked in</h4>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/ayush-kushwaha-65650b263/">
                                        kushwaha-ayush
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-start px-1">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "

                                    placeholder="your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-start px-1">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "

                                    placeholder="xyz123@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-start px-1">Message</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"

                                    placeholder="write your message here ..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="cosmic-button w-full flex items-center justify-center gap-2 text-[1.2rem]"
                            >
                                Send Message<Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}