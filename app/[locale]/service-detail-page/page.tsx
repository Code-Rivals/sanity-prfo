// pages/service/[slug].tsx
import ServiceDetailsPage from "../../../components/feature/service-detail-component";

const mockService = {
    title: "You will get WordPress Website Design esign",
    description:
        "I am a WordPress Expert with Experience in WordPress website design and development. I have a good hand of experience in WordPress Installation, WordPress Responsive Design, WordPress Development, WordPress Plugin integration, Wordpress speed optimization, and WordPress SEO",
    images: ["/images/sample-img.jpg", "/images/sample1.jpg", "/images/sample-img.jpg"],
    skills: [
        "WordPress Theme Development",
        "WordPress Theme Customization",
        "Elementor Pro",
        "WordPress SEO",
    ],
    options: [
        { title: "Preparation of consumption tax return (general taxation)", price: 201 },
        { title: "Consumption tax return preparation (simplified taxation)", price: 134 },
        { title: "Express Service", price: 201 },
        { title: "Sending paper documents", price: 134 },
        { title: "Bookkeeping service", price: 134 },
        { title: "Electronic filing", price: 134 },
        { title: "Medical Expense Deduction Receipts", price: 34 },
    ],
};

export default function Page() {
    return <ServiceDetailsPage data={mockService} />;
}
