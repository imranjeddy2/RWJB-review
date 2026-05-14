import { ReviewHeader } from "@/components/ReviewHeader";
import { ReviewFooter } from "@/components/ReviewFooter";
import { Cover } from "@/components/Cover";
import { TOC } from "@/components/TOC";
import { SectionHeader } from "@/components/SectionHeader";
import { QABlock } from "@/components/QABlock";
import { DataTable } from "@/components/DataTable";

export const dynamic = "force-dynamic";

const cream = "var(--color-bg)";
const surface = "var(--color-surface)";

export default function Page() {
  return (
    <>
      <ReviewHeader />
      <main className="flex-1">
        <Cover />

        <section className="py-24 px-6" style={{ backgroundColor: cream }}>
          <TOC />
        </section>

        {/* I. Platforms, Products, Offerings */}
        <section id="section-i" className="py-24 px-6" style={{ backgroundColor: cream }}>
          <SectionHeader
            roman="I."
            title="Description of Platforms, Products, and Offerings"
          />

          <QABlock
            id="i-q1"
            number="Q1"
            q="Description of the platforms, products, and/or offerings."
          >
            <p>
              ClinicBridge.ai&apos;s mission is to leverage AI to deliver increased
              access and quality of care to patients with organ failure across their
              entire journey. Our initial product is a voice AI platform for
              pre-evaluation screenings, which:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contacts referred patients and conducts a structured pre-transplant
                evaluation intake conversation tailored to the center&apos;s
                protocol and selection criteria.
              </li>
              <li>
                Collects transplant-specific intake information, including prior
                testing, insurance status, preemptive vs. dialysis status, and
                living donor-related information.
              </li>
              <li>
                Returns a structured summary which can be converted to a note for
                staff review based on center-defined criteria (pre-templated
                notes).
              </li>
              <li>
                Flags patients who may require follow-up by transplant staff or the
                referring physician, when appropriate.
              </li>
              <li>
                Living donor education is incorporated once the pre-evaluation
                workflow is established.
              </li>
            </ul>
            <p>
              Additionally, ClinicBridge.ai&apos;s product roadmap includes waitlist
              management and post-transplant patient care.
            </p>
          </QABlock>

          <QABlock id="i-q2" number="Q2" q="What problem is the platform trying to solve?">
            <p>
              Kidney transplant programs are under increasing pressure to care for
              more patients while also improving patient access, operational
              efficiency, and throughput without adding coordinator/FTE burden.
              This stems from key industry forces such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                CMMS-related requirements are driving higher referral volume for
                many transplant programs.
              </li>
              <li>
                IOTA is raising performance expectations across transplant programs
                (including non-IOTA programs), making efficient workflows more
                important.
              </li>
              <li>
                Dialysis units continue to drive referral volume, often without
                meaningful upstream screening, which increases administrative work.
              </li>
            </ul>
            <p>
              The initial use case targets the pre-evaluation workflow because
              transplant coordinators spend significant time on manual outbound
              pre-evaluation calls. The work is high-volume, repetitive, and
              produces records of variable structure depending on coordinator
              availability and style. ClinicBridge.ai automates the call and the
              structured data capture without removing clinical judgment from the
              listing decision. It then can identify which patients should be
              placed in the finite number of pre-clinic slots — resulting in high
              utility of clinic space.
            </p>
          </QABlock>

          <QABlock id="i-q3" number="Q3" q="What are the benefits?">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Improved access to care (24/7 availability — calls do not require
                coordinator availability) and patient satisfaction scores.
              </li>
              <li>Increased referral-to-first-touch-evaluation timing.</li>
              <li>
                Replaces manual coordinator outbound call time on routine
                pre-evaluation.
              </li>
              <li>
                Produces a consistent transcript and a fixed schema of extracted
                fields per call.
              </li>
              <li>Scales to large referral lists without additional FTE.</li>
              <li>
                Saves on human capital, allowing the team to practice at the top of
                their license.
              </li>
              <li>Available in all languages.</li>
            </ul>
          </QABlock>

          <QABlock id="i-q4" number="Q4" q="What type of AI is leveraged?">
            <p>
              ClinicBridge.ai does not host or fine-tune its own models. It
              composes commercially available models from named providers, each
              operating under a Business Associate Agreement (see Section V). All
              providers handle PHI under their respective enterprise /
              HIPAA-eligible service tiers with zero data retention configured
              where applicable.
            </p>
            <p>
              <strong>Layer 1 — Voice orchestration.</strong> ClinicBridge.ai
              leverages various platforms, like Vapi and Retell, to handle
              telephony, dial-out, and real-time orchestration of the
              speech-to-text → LLM → text-to-speech audio loop. Both are integrated
              and operate under BAAs on their HIPAA-eligible service tiers;
              provider selection is per-deployment.
            </p>
            <p>
              <strong>Layer 2 — Speech I/O.</strong> OpenAI Whisper for real-time
              speech-to-text. ElevenLabs for text-to-speech voice synthesis. Both
              accessed through the orchestration layer under enterprise BAAs with
              zero training-data retention.
            </p>
            <p>
              <strong>Layer 3 — Reasoning.</strong> OpenAI GPT-class model drives
              the in-call agent (question routing, follow-ups, clarification).
              Anthropic Claude Haiku 4.5 performs post-call structured extraction
              and risk classification of the transcript.
            </p>
          </QABlock>

          <QABlock id="i-q5" number="Q5" q="Describe how the user uses the platform / What is the workflow?">
            <ol className="list-decimal pl-6 space-y-2 tabular-nums">
              <li>
                Patient referral details are input into ClinicBridge.ai&apos;s
                platform either through triggered automation and/or manual imports.
              </li>
              <li>
                The platform places an outbound call within the configured contact
                window via the voice orchestration layer (Vapi or Retell).
              </li>
              <li>
                The patient is informed at the start of the call that they are
                speaking with an AI and is offered the option to request a human
                callback at any time.
              </li>
              <li>
                The agent runs a structured pre-evaluation script with adaptive
                follow-ups. STT confidence falling below threshold triggers a
                clarification prompt rather than an inferred answer.
              </li>
              <li>
                After the call ends, the transcript is passed to Claude Haiku for
                structured extraction: discrete eligibility fields, risk
                classification, and a free-text summary.
              </li>
              <li>
                Structured fields are written to mimic Epic forms. Recording,
                transcript, and extracted fields are stored in the ClinicBridge.ai
                environment for coordinator access.
              </li>
              <li>
                The platform automatically compares collected data against the
                program&apos;s contraindications / selection criteria and any
                borderline classifications.
              </li>
              <li>
                Coordinators do a final review of flagged calls. All final
                listing-eligibility determinations remain with clinical staff.
              </li>
            </ol>
          </QABlock>

          <QABlock id="i-q6" number="Q6" q="What resources are needed to implement?">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                BAAs covering ClinicBridge.ai and each named subprocessor —
                fully executed before any PHI is transmitted (Section V).
              </li>
              <li>
                AWS-hosted infrastructure managed entirely by ClinicBridge.ai — no
                on-premise components.
              </li>
              <li>
                One-time clinical configuration of the pre-evaluation script and
                extraction schema (~1–2 weeks, joint working sessions with the
                transplant program).
              </li>
              <li>Coordinator dashboard training (~2–4 hours).</li>
            </ul>
            <p>
              During the design-partner period, ClinicBridge.ai will work with
              RWJBarnabas to scope and plan a future Epic integration for
              post-launch deployment. To support this effort, ClinicBridge requests
              access to appropriate internal Epic resources for integration scoping
              and development, including access to a non-production environment.
            </p>
            <p>
              Additionally, ClinicBridge requests Epic FHIR API credentials with
              permissions to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Read patient demographics and condition data.</li>
              <li>Write data to the agreed-upon integration target resource.</li>
            </ul>
          </QABlock>

          <QABlock id="i-q7" number="Q7" q="What regulatory or security standards have been documented?">
            <p>
              Application and infrastructure controls are documented and available
              for review under NDA. Summary follows.
            </p>
            <div>
              <p className="font-medium mb-3" style={{ color: "var(--color-primary)" }}>
                Infrastructure (AWS)
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IAM with least-privilege roles, MFA enforced.</li>
                <li>Customer-managed KMS keys (RDS, EBS, S3) with annual rotation.</li>
                <li>Multi-AZ RDS PostgreSQL — encryption at rest and in transit (TLS 1.2+).</li>
                <li>VPC with private/public subnet isolation, NAT Gateways, NACLs and security groups.</li>
                <li>WAF with managed rules on the load balancer.</li>
                <li>GuardDuty intrusion detection with high-severity alerting.</li>
                <li>CloudTrail audit logging to WORM-protected S3 (MFA-delete).</li>
                <li>Security Hub — Foundational Security Best Practices baseline.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-3 mt-2" style={{ color: "var(--color-primary)" }}>
                Application
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-stage Docker images, non-root runtime user.</li>
                <li>Secrets in AWS Secrets Manager — no env-baked credentials.</li>
                <li>Egress filtering to a known allowlist of provider endpoints.</li>
                <li>GitHub branch protection, secret scanning, push protection, signed commits.</li>
                <li>Dependabot automated vulnerability patching.</li>
                <li>Structured JSON logging with PII masking.</li>
                <li>Centralized log shipping to immutable S3 archive via Firehose.</li>
              </ul>
            </div>
          </QABlock>

          <QABlock id="i-q8" number="Q8" q="Does this address the NJ legislation (A4030 / S3876)?">
            <p>
              The platform is built to meet the disclosure, oversight, and
              recordkeeping expectations consistent with NJ legislative frameworks
              governing AI use in clinical settings.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                AI disclosure delivered at the start of every call. Disclosure is
                non-configurable.
              </li>
              <li>
                Patient may request a human callback at any point. Honored within
                one business day.
              </li>
              <li>
                Recording and transcript retained per HIPAA retention schedule.
              </li>
              <li>
                Audit trail captures every model output that informed an
                eligibility determination. Human-in-the-loop on every adverse
                indication.
              </li>
            </ul>
            <p>
              <strong>Human oversight.</strong> No adverse eligibility decision is
              issued by the AI alone. The AI generates a structured indication;
              clinical staff make the final determination.
            </p>
          </QABlock>
        </section>

        {/* II. Fidelity */}
        <section id="section-ii" className="py-24 px-6" style={{ backgroundColor: surface }}>
          <SectionHeader roman="II." title="Fidelity" />

          <QABlock id="ii-q1" number="Q1" q="Model statistics or KPIs that speak to platform reliability.">
            <p>
              ClinicBridge.ai is launching a 90- to 120-day design partnership
              with select transplant centers. RWJBarnabas Health is one of them. The engagement is deliberately scoped: the pre-evaluation
              intake is built around each center&apos;s protocol, human oversight
              is maintained throughout, and impact is measured against real
              referral-to-evaluation timelines — not a demo. The partnership
              structure is being co-authored with each design partner so it
              fits the organization.
            </p>
            <p>
              The KPIs below are the operational targets used to evaluate the
              platform; per-customer measured values are reported monthly
              during the design-partner period and steady-state operation.
              Early-deployment measured values are available on request.
            </p>
            <DataTable
              caption="Operational KPI targets"
              headers={["KPI", "Target", "Description"]}
              rows={[
                ["Call Completion Rate", "≥ 75%", "Initiated calls that reach a structured pre-evaluation completion. Target only — production rates are population-dependent."],
                ["STT Confidence Threshold", "≥ 0.85", "Per-utterance confidence floor. Below threshold triggers an automatic clarification rather than an inferred response."],
                ["STT Word Error Rate", "7–12%", "Whisper performance band on conversational English per OpenAI documentation; varies by accent and audio quality."],
                ["Coordinator Override", "< 10%", "Percentage of calls where a coordinator changes the AI's eligibility recommendation. If this stays above 10%, the team will review and improve the AI scripts and data extraction logic."],
                ["Shadow-Reviewed Calls", "≥ 10%", "Minimum sample reviewed by a clinical coordinator during the first 90 days to validate extraction accuracy."],
              ]}
            />
          </QABlock>

          <QABlock id="ii-q2" number="Q2" q="If KPIs aren't available — outcomes, publications, third-party evals, or documentation.">
            <p>
              Underlying-component performance is documented by the model providers
              and available for review:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>OpenAI Whisper</strong> — published WER benchmarks across
                languages and accent groups; HIPAA-eligible deployment under BAA
                with zero data retention.
              </li>
              <li>
                <strong>Anthropic Claude Haiku 4.5</strong> — published model card
                with safety, refusal, and bias evaluations.
              </li>
              <li>
                <strong>ElevenLabs</strong> — voice synthesis quality benchmarks;
                HIPAA-eligible enterprise tier.
              </li>
              <li>
                <strong>Vapi</strong> and <strong>Retell</strong> — orchestration
                latency and reliability documentation; SOC 2 status available on
                request.
              </li>
            </ul>
            <p>
              <strong>Domain-specific accuracy.</strong> For medication names and
              clinical terms specific to transplant pre-evaluation, a custom
              phoneme / term dictionary is maintained per program and updated based
              on shadow-review findings.
            </p>
            <p>
              <strong>Validation during deployment.</strong> A shadow-scoring
              protocol applies during the first 90 days: a minimum 10% sample of
              calls (configurable upward) is reviewed by a clinical coordinator to
              assess extraction accuracy and eligibility-indication quality.
              Findings drive updates to the script, the extraction prompt, and the
              term dictionary.
            </p>
          </QABlock>
        </section>

        {/* III. Bias, Ethics, Fairness */}
        <section id="section-iii" className="py-24 px-6" style={{ backgroundColor: cream }}>
          <SectionHeader roman="III." title="Bias, Ethical Considerations, and Fairness" />

          <QABlock id="iii-q1" number="Q1" q="Process for handling bias in development and ongoing monitoring.">
            <p className="font-medium" style={{ color: "var(--color-primary)" }}>
              Design controls.
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Reading level.</strong> Pre-evaluation questions are
                written at 6th–8th grade reading level. Clinical jargon is avoided
                or defined in plain language before use.
              </li>
              <li>
                <strong>Closed-form questions.</strong> Questions are yes/no,
                multiple-choice, or numeric wherever possible. Closed-form
                responses reduce variance driven by communication style — a known
                source of inconsistency in unstructured interviews.
              </li>
              <li>
                <strong>Configurable tone and pacing.</strong> Voice, pace, and
                phrasing are program-configurable. Multiple language variants are
                supported.
              </li>
              <li>
                <strong>No autonomous clinical decision-making and rejections.</strong>{" "}
                The platform does not make diagnoses, determine eligibility
                independently, or make autonomous clinical decisions. Outputs are
                intended to support coordinator workflows and are subject to human
                review.
              </li>
              <li>
                <strong>Human-in-the-loop review.</strong> The AI does not
                autonomously reject patients or finalize enrollment decisions. Any
                indication or recommendation generated by the system is reviewed
                by clinical or research staff before action is taken.
              </li>
              <li>
                <strong>No inferences from voice.</strong> The platform does not
                infer demographic attributes (age, gender, mood) from voice
                characteristics. It transcribes; it does not profile.
              </li>
              <li>
                <strong>Ongoing monitoring and feedback.</strong> Design-partner deployments
                include ongoing review of transcription accuracy, workflow
                outcomes, escalation patterns, and user feedback to identify
                potential bias, accessibility gaps, or inconsistent performance
                across patient groups.
              </li>
            </ol>
          </QABlock>

          <QABlock id="iii-q2" number="Q2" q="Testing and documentation that shows bias is controlled for.">
            <p>
              <strong>Per-cohort monitoring.</strong> The metrics below are tracked
              broken out by demographic and operational cohorts. Statistically
              significant cross-cohort differences trigger clinical review.
            </p>
            <DataTable
              caption="Per-cohort metrics"
              headers={["Metric", "Age cohort", "Language", "Alert threshold"]}
              rows={[
                ["Call Completion Rate", "Tracked", "Tracked", "±10% vs. overall"],
                ["Avg. Call Duration", "Tracked", "Tracked", "Statistical significance"],
                ["STT Re-prompt Rate", "Tracked", "Tracked", "> 15%"],
                ["Question Coverage", "Tracked", "Tracked", "±8% vs. overall"],
                ["Coordinator Override", "Tracked", "Tracked", "> 15%"],
              ]}
            />
            <p>
              Call Completion Rate is additionally tracked by call time-of-day to
              detect contact-window bias. Post go-live, cohort-level
              eligibility-acceptance rates (AI-screened vs. coordinator-screened)
              are compared to surface any systematic difference attributable to the
              screening modality.
            </p>
            <p className="font-medium mt-4" style={{ color: "var(--color-primary)" }}>
              Patient-facing guardrails.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI disclosure at start of every call — non-configurable.</li>
              <li>
                Human callback option offered at start; honored any time during the
                call.
              </li>
              <li>Recording and transcript retention per HIPAA.</li>
              <li>No voice-based demographic inference.</li>
            </ul>
          </QABlock>

          <QABlock id="iii-q3" number="Q3" q="Summary of the bias / ethics / fairness program.">
            <p>
              Bias risk is addressed at three points: (1) script and reading-level
              review pre-deployment; (2) closed-form questions to reduce response
              variance; (3) per-cohort monitoring with explicit alert thresholds
              post go-live.
            </p>
          </QABlock>
        </section>

        {/* IV. Ongoing Maintenance */}
        <section id="section-iv" className="py-24 px-6" style={{ backgroundColor: surface }}>
          <SectionHeader roman="IV." title="Ongoing Maintenance" />

          <QABlock id="iv-q1" number="Q1" q="Who is responsible for monitoring AI models for performance and degradation?">
            <p>
              The ClinicBridge.ai engineering team owns model monitoring,
              performance management, and incident response. A named technical
              contact is assigned per customer for performance reviews and
              escalations.
            </p>
          </QABlock>

          <QABlock id="iv-q2" number="Q2" q="How is it done?">
            <p className="font-medium" style={{ color: "var(--color-primary)" }}>
              Hallucination &amp; misclassification.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Coordinator override rate is the primary signal for LLM
                misclassification in the post-call extraction. Sustained override
                rate &gt; 10% triggers a structured prompt and script review.
              </li>
              <li>
                Random sampling (≥ 10% during the design-partner period, configurable) provides a
                human-reviewed ground-truth set for ongoing accuracy tracking.
              </li>
            </ul>

            <p className="font-medium mt-4" style={{ color: "var(--color-primary)" }}>
              Model and population drift.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                STT confidence-score distribution is tracked. A rolling 7-day mean
                drop below 0.80 triggers review of the acoustic model and term
                dictionary.
              </li>
              <li>
                LLM provider model updates (OpenAI / Anthropic version changes) are
                evaluated against a regression suite of synthetic call scenarios in
                staging before promotion to production.
              </li>
              <li>
                Prompts and extraction schemas are version-controlled in source. No
                prompt change reaches production without code review and
                regression-suite pass.
              </li>
            </ul>

            <p className="font-medium mt-4" style={{ color: "var(--color-primary)" }}>
              Infrastructure.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>CloudWatch monitoring on compute, memory, and application health.</li>
              <li>Monthly review of Security Hub findings.</li>
            </ul>

            <DataTable
              caption="SLA targets"
              headers={["Target", "Commitment"]}
              rows={[
                ["Platform Uptime", "99.5% (excluding scheduled maintenance announced ≥ 48 hours in advance)"],
                ["Performance Review", "Monthly KPI dashboard review with the customer; quarterly cohort-metric deep-dive"],
              ]}
            />
          </QABlock>
        </section>

        {/* V. Data Handling, Training, IP */}
        <section id="section-v" className="py-24 px-6" style={{ backgroundColor: cream }}>
          <SectionHeader roman="V." title="Data Handling, Training, and IP" />

          <QABlock id="v-q1" number="Q1" q="Does RWJBarnabas Health data leave RWJBarnabas Health walls?">
            <p>
              Patient data is transmitted to and stored in the ClinicBridge.ai
              HIPAA-compliant AWS environment (us-east-1) under BAA. During a
              call, audio and transcript pass through the named subprocessors
              (Vapi, OpenAI, ElevenLabs) — each under a BAA and configured for
              zero training-data retention. The post-call transcript is sent to
              Anthropic Claude Haiku for extraction under the same terms. No
              patient data is shared with any party not covered by a BAA. All
              BAAs will be fully executed before any PHI is transmitted under
              this engagement.
            </p>
          </QABlock>

          <QABlock id="v-q2" number="Q2" q="Is RWJBarnabas Health data used to train AI models?">
            <p>
              <strong>No.</strong> No RWJBarnabas Health data is used to train,
              fine-tune, or improve any external model. All provider relationships
              (OpenAI, Anthropic, ElevenLabs, Vapi, Retell) are configured under
              HIPAA-eligible / enterprise tiers with zero training-data retention,
              meaning RWJBarnabas data is not used by those providers to train
              their models.
            </p>
            <p>
              At this time, ClinicBridge.ai also does not use RWJBarnabas data to
              train internal models. Recordings and transcripts are retained within
              the ClinicBridge.ai environment solely for audit, compliance, and
              coordinator review purposes, and are deleted according to the agreed
              retention schedule.
            </p>
            <p>
              As ClinicBridge.ai evolves, we may explore the use of de-identified
              or approved data to improve internal product performance and
              workflows. If that approach is ever pursued, ClinicBridge.ai will
              notify and align with RWJBarnabas in advance before any such use
              occurs.
            </p>
          </QABlock>

          <QABlock id="v-q3" number="Q3" q="Is RWJBarnabas Health data used for future product development?">
            <p>
              <strong>No.</strong> No patient-level data is used in the development
              of future features or offerings. Aggregate, de-identified operational
              metrics (e.g., call completion rate, override rate) may be used
              internally to benchmark platform performance — only in a form that
              contains no PHI and cannot be re-identified.
            </p>
          </QABlock>

          <QABlock id="v-q3a" number="Q3a" q="What about IP generated during the engagement?">
            <p>
              Program-specific configurations developed for RWJBarnabas Health —
              the pre-evaluation script, eligibility extraction schema, and field
              mappings — are the{" "}
              <strong>intellectual property of RWJBarnabas Health</strong>.
              ClinicBridge.ai retains no right to reuse these configurations for
              other customers.
            </p>
          </QABlock>

          <QABlock id="v-subprocessors" q="Subprocessors with PHI access.">
            <p>
              The following are the only entities that receive PHI (audio,
              transcript, or structured extraction output) during operation. Each
              operates under a Business Associate Agreement.{" "}
              <strong>
                All BAAs will be fully executed before any PHI is transmitted
                under this engagement.
              </strong>
            </p>
            <DataTable
              caption="Subprocessors"
              headers={["Subprocessor", "Role", "Notes"]}
              rows={[
                ["Amazon Web Services", "Hosting", "Under BAA"],
                ["Vapi", "Voice orchestration", "Under BAA"],
                ["Retell", "Voice orchestration", "Under BAA"],
                ["OpenAI", "STT (Whisper) + in-call LLM", "Under BAA · Zero retention"],
                ["ElevenLabs", "Text-to-speech", "Under BAA"],
                ["Anthropic", "Post-call extraction", "Under BAA · Zero retention"],
                ["No other PHI recipients", "—", "List is exhaustive"],
              ]}
            />
          </QABlock>
        </section>

        {/* VI. Return on Investment */}
        <section id="section-vi" className="py-24 px-6" style={{ backgroundColor: surface }}>
          <SectionHeader roman="VI." title="Return on Investment" />

          <QABlock id="vi-q1" number="Q1" q="Baseline metrics for the requestor to collect.">
            <p>
              The following are recommended for prospective collection by the
              RWJBarnabas Health transplant program <strong>before</strong>{" "}
              go-live. Without baselines, post-implementation comparisons are not
              statistically defensible.
            </p>
            <DataTable
              caption="Baseline metrics"
              headers={["Metric", "Description", "Source"]}
              rows={[
                ["Patient satisfaction score", "Patient-reported satisfaction with the intake and pre-evaluation experience", "Post-interaction survey (Likert or NPS)"],
                ["Referral-to-first-touch timing", "Average time from referral receipt to initial patient contact", "Epic report / call system log"],
                ["Evaluation-to-listing timing", "Average time from evaluation completion to transplant list activation", "Epic report"],
                ["Patient contact rate", "% of referred patients successfully reached within 5 business days", "Call system / coordinator log"],
                ["Intake completion rate", "% of initiated pre-evaluation workflows completed successfully", "Platform analytics / coordinator log"],
                ["Coordinator pre-evaluation time", "Average minutes per pre-evaluation interaction, including prep and post-call documentation", "Time tracking or coordinator survey"],
                ["Coordinator throughput", "Patients pre-evaluated per coordinator per week", "EMR query / coordinator log"],
                ["Coordinator workload impact", "Change in perceived workload and administrative burden (NPS or Likert)", "Pre/post-implementation survey"],
                ["Incomplete evaluation rate", "% of pre-evaluations requiring a second contact attempt or follow-up", "Coordinator log / platform analytics"],
              ]}
            />
          </QABlock>

          <QABlock id="vi-q2" number="Q2" q="Recommended minimum sample size to show impact.">
            <p>
              To detect an improvement in KPIs we suggest a minimum of{" "}
              <strong>75 completed AI-screened patients</strong>.
            </p>
          </QABlock>

          <QABlock id="vi-q3" number="Q3" q="When should post-implementation data be collected?">
            <DataTable
              caption="Measurement timeline"
              headers={["Phase", "When", "What"]}
              rows={[
                ["Pre-launch", "4–6 weeks before go-live", "Prospective baseline collection across all six metrics. Sets the comparison point for every subsequent read."],
                ["Early signal", "30 days post go-live", "Operational metrics only (20–30 calls). Insufficient for statistical conclusions — used for calibration."],
                ["Primary read", "90 days post go-live", "Sufficient volume for statistical comparison across all KPIs. Recommended primary endpoint for ROI determination."],
                ["Sustained", "6 months post go-live", "Time-to-list and downstream listing-outcome reads. Required because of the longitudinal nature of the listing workflow."],
              ]}
            />
            <p>
              <strong>Primary endpoint.</strong>{" "}The 90-day read is the recommended
              primary endpoint for ROI. Time-to-list and listing-outcome impact
              require 6–12 months to show fully due to the listing workflow&apos;s
              longitudinal nature.
            </p>
          </QABlock>
        </section>
      </main>
      <ReviewFooter />
    </>
  );
}
