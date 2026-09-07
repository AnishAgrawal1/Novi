// WIDGETS
import { HeroSection } from "../widgets/hero-section";
import { SocialProofBar } from "../widgets/social-proof-bar";
import { FeatureSection } from "../widgets/features-section";
import { WorkflowComparison } from "../widgets/workflow-comparision";
import { Testimonials } from "../widgets/testimonials";
import { Pricing } from "../widgets/pricing";

export const HomePage = () => {
    return (
        <div id="home">
            <HeroSection />
            <SocialProofBar />
            <FeatureSection />
            <WorkflowComparison />
            <Testimonials />
            <Pricing />
        </div>
    );
}
