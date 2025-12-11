export default function BylawsNavigation() {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="./about-us.html" className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium">
            ← Back to About Us
          </a>
          <a href="./homepage.html" className="px-6 py-3 rounded-lg border border-border hover:border-primary text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="./registration-form.html" className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-glow transition-all font-medium">
            Register Now
          </a>
        </div>
      </div>
    </section>
  )
}