export const metadata = { title: 'Terms of Service' };
export default function Terms() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8 prose prose-sm">
        <h1>Terms of Service</h1>
        <p className="text-xs text-slateMuted">Review by legal counsel before launch. Signed project agreements govern specific engagements.</p>
        <h3>Website usage</h3><p>Content is for general information. Do not misuse, attempt unauthorized access, or interfere with services.</p>
        <h3>Project proposals and agreements</h3><p>Proposals are estimates. Final scope, timeline and fees are in signed agreement. Scope changes require written approval.</p>
        <h3>Payment terms</h3><p>Deposit and milestones as agreed. Late payments may delay delivery. Final delivery upon cleared payment.</p>
        <h3>Intellectual property</h3><p>Upon full payment per agreement, client owns delivered custom code and design, excluding third-party libraries and pre-existing tools.</p>
        <h3>Client responsibilities</h3><p>Provide content, feedback and access timely. Delays may affect timeline.</p>
        <h3>Maintenance and support</h3><p>Unless covered by maintenance plan, support after launch is billable.</p>
        <h3>Limitations</h3><p>Services provided as-is without warranty of specific rankings or business results. Liability limited as permitted by law.</p>
      </div>
    </div>
  );
}
