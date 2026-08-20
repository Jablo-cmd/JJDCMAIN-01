from pathlib import Path
import pypandoc

text = r"""# JO JACKSON DANCE COMPANY
# MASTER PROJECT CONTEXT DOCUMENT v1.0

Prepared by: Auris Nexus Technologies

## Purpose
This document is the single source of truth for the Jo Jackson Dance Company website project. It combines project context, product requirements, UX strategy, brand guidelines, technical direction, information architecture and AI instructions.

## Project Vision
Create a premium, modern, warm, happy and confident website that positions Jo Jackson Dance Company as one of East London's leading dance academies. The website must build trust with parents, inspire children and dancers, and showcase professionalism, excellence and community. It must feel like a luxury digital experience while remaining a fast, accessible website. On mobile, the experience should feel as polished as a native app, but it is still a website.

## Business Goals
- Increase enquiries
- Increase trial class bookings
- Increase enrolments
- Build trust with parents
- Showcase achievements and studio culture
- Improve local SEO
- Prepare for future growth

## Brand Identity
Personality:
- Premium
- Warm
- Happy
- Confident
- Elegant
- Professional
- Family-oriented
- Inspirational
- Disciplined
- Creative

Brand promise:
Jo Jackson Dance Company develops confident, disciplined and versatile dancers in a welcoming environment where every student is encouraged to reach their potential.

## Colour Palette
Primary: Turquoise
Secondary: White
Supporting: Black

Use turquoise for energy and optimism, white for clarity and elegance, and black for strength and premium contrast.

## Target Audience
Primary: Parents seeking quality dance education.
Secondary: Children, teenagers, competition dancers and adults.

## Unique Selling Proposition
JJDC brings respected choreographers and industry professionals to East London, giving students access to high-quality training without extensive travel. The studio develops versatile dancers through strong technical foundations while encouraging confidence, resilience and enjoyment.

## Website Architecture
Pages:
- Home
- About
- Programs
- Timetable
- Gallery
- Contact

Navigation:
Desktop: Logo | Home | About | Programs | Timetable | Gallery | Contact | Book a Trial Class
Mobile: Premium top bar with app-inspired navigation, floating WhatsApp and Book a Trial CTA.

## Homepage Strategy
Hero:
Building Confidence.
Inspiring Excellence.
Creating Champions.

Sections:
- Trust Indicators
- Why Dance?
- Meet Jo
- Programs
- Student Journey
- Achievements
- Gallery Preview
- Testimonials
- Final CTA

## Programs
Include:
Pre Badge, Badge Programme, Jazz, Hip Hop, Contemporary, Lyrical, Competition Teams, Private Lessons and Adult Jazz.

Each program includes description, age group, benefits, attire, level and CTA.

## Parent Information
Include dress code, official apparel, competition uniform requirements, examinations, FAQs and studio expectations.

### Class Attire
Hip Hop:
- Sneakers
- Black tights or leggings
- JJDC T-shirt (or plain fitted T-shirt until purchased)

Freestyle, Jazz & Contemporary:
- Black tights
- Black leotard
- Barefoot, foot undies or jazz shoes as instructed

Official JJDC apparel includes T-shirts, hoodies, jackets, tights, shorts and accessories.

Official uniform is compulsory for examinations, competitions, workshops, performances and travelling teams.

## What Makes JJDC Different
- Brings industry experts to East London.
- Strong technical foundations.
- Develops versatile dancers.
- Examinations encouraged but never forced.
- Competitions build resilience and confidence.
- Growth is valued above trophies.
- Students are supported at their own pace.

## UX Strategy
The emotional journey:
Curiosity → Trust → Belonging → Confidence → Action.

Design principles:
- Spacious layouts
- Large imagery
- Elegant typography
- Smooth animations
- Clear calls to action
- Strong accessibility
- Fast loading

## Mobile Experience
The website must feel polished and app-like:
- Large touch targets
- Sticky navigation
- Floating WhatsApp
- Floating Book a Trial button
- Smooth transitions
- One-handed usability
- No horizontal scrolling

## SEO
- Semantic HTML
- Metadata
- Structured data
- Open Graph
- Local SEO
- Optimized images
- Internal linking

## Technical Standards
- HTML5
- Modern CSS
- Responsive design
- Optimized assets
- Lazy loading
- WCAG accessibility
- Excellent Core Web Vitals

## Known Studio Information
Studio: Jo Jackson Dance Company

Phone: 082 925 4377

Address:
8 Smartt Road
Nahoon
East London
5201

## AI Instructions
Before making design or development decisions:
- Read this document first.
- Do not create generic layouts.
- Reuse all supplied information.
- Every page must build trust.
- Every interaction must feel premium.
- Think like a top digital agency.
- Preserve the warm, happy and confident personality.
- Design for parents first, while delighting dancers.
"""
out="/mnt/data/JJDC_Master_Project_Context_Document.md"
pypandoc.convert_text(text,"md",format="md",outputfile=out,extra_args=["--standalone"])
print(out)


---

# WEBSITE CONTENT ARCHITECTURE

## Purpose

The website architecture defines how visitors experience Jo Jackson Dance Company from the moment they arrive until they take action. Every page, section, image, animation and call-to-action should contribute to a seamless journey that builds trust, communicates excellence and encourages prospective students and parents to book a trial class.

This is not simply a collection of pages. It is a carefully designed digital experience that reflects the professionalism, warmth and culture of Jo Jackson Dance Company.

---

# PRIMARY WEBSITE OBJECTIVES

The website exists to achieve the following objectives:

- Build immediate trust with parents.
- Position JJDC as one of East London's leading dance academies.
- Showcase the quality of dance education.
- Highlight Jo Jackson's experience and philosophy.
- Inspire children, teenagers and adults to begin their dance journey.
- Increase enquiries and trial class bookings.
- Showcase competitions, performances and studio achievements.
- Demonstrate professionalism, discipline and creativity.
- Support future business growth.

Every page should support one or more of these objectives.

---

# THE STORY THE WEBSITE TELLS

The visitor should experience the following emotional journey.

"I need a dance studio."

↓

"This studio looks professional."

↓

"The students look happy."

↓

"I love the atmosphere."

↓

"This feels safe."

↓

"I trust Jo Jackson."

↓

"My child would love it here."

↓

"I want to book a trial lesson."

Every page should contribute to this story.

---

# WEBSITE EXPERIENCE

The website should feel like walking into the Jo Jackson Dance Company studio for the very first time.

Visitors should immediately experience:

- Warmth
- Professionalism
- Joy
- Confidence
- Creativity
- Energy
- Community
- Excellence

The experience should never feel overwhelming.

Information should be presented gradually, allowing visitors to naturally discover more as they scroll.

---

# INFORMATION HIERARCHY

The website should answer visitor questions in the correct order.

1. Who is JJDC?
2. Can I trust this studio?
3. What makes JJDC different?
4. What classes are available?
5. Is there a class for my child?
6. When are classes?
7. Where is the studio?
8. How do I book a trial class?

No visitor should have to search for essential information.

---

# WEBSITE STRUCTURE

The website consists of six primary pages.

- Home
- About
- Programs
- Timetable
- Gallery
- Contact

Each page has a clear purpose and should avoid unnecessary content.

---

# NAVIGATION STRATEGY

The navigation should be clean, simple and immediately understandable.

Desktop Navigation

- Logo
- Home
- About
- Programs
- Timetable
- Gallery
- Contact
- Book a Trial Class (Primary CTA)

Mobile Navigation

The mobile experience should feel polished and intuitive.

Include:

- Sticky navigation
- Large touch targets
- Floating WhatsApp button
- Persistent "Book a Trial Class" call-to-action
- Smooth transitions
- Clear active page indicators

Although the mobile experience should feel like a native application, it must remain a fast, responsive website.

---

# HOMEPAGE STRATEGY

## Primary Objective

Create an emotional connection that builds trust and encourages visitors to enquire or book a trial class.

The homepage should tell the complete JJDC story without overwhelming visitors.

---

## Hero Section

The hero section should immediately communicate confidence and professionalism.

Use a high-quality image or cinematic video showing dancers in motion.

Headline:

**Building Confidence. Inspiring Excellence. Creating Champions.**

Supporting copy should explain that Jo Jackson Dance Company develops confident, disciplined and versatile dancers in a supportive environment.

Primary Call-to-Action:

Book a Trial Class

Secondary Call-to-Action:

View Timetable

---

## Trust Section

Immediately reinforce credibility using visual trust indicators.

Examples include:

- Professional Dance Training
- All Ages Welcome
- Competition Teams
- Private Coaching
- Experienced Instruction
- Safe & Supportive Environment
- East London Studio

---

## Why Dance?

Focus on the life-changing benefits of dance rather than simply listing classes.

Key themes include:

- Confidence
- Discipline
- Creativity
- Friendships
- Fitness
- Self-expression
- Leadership
- Resilience

---

## Meet Jo

Introduce Jo Jackson with a warm, professional portrait.

Briefly explain her philosophy, passion and commitment to developing confident dancers.

Include a button linking to the About page.

---

## Programs Preview

Introduce the studio's core programmes.

Include:

- Pre Badge
- Badge Programme
- Jazz
- Hip Hop
- Contemporary
- Lyrical
- Competition Teams
- Adult Jazz
- Private Lessons

Each programme should include a short description and a clear call-to-action.

---

## Student Journey

Illustrate how dancers progress through JJDC.

Example journey:

First Class

↓

Technique Development

↓

Performance Opportunities

↓

Optional Examinations

↓

Competition Teams

↓

National Competitions

↓

International Opportunities

This demonstrates long-term growth rather than short-term participation.

---

## What Makes JJDC Different

Highlight the studio's unique strengths.

These include:

- Bringing industry professionals to East London.
- Strong technical foundations.
- Training versatile dancers.
- Examinations encouraged but never forced.
- Competitions that build resilience and confidence.
- Personal growth over pressure.
- Supportive family environment.

---

## Gallery Preview

Display carefully selected images showing:

- Classes
- Competitions
- Performances
- Studio culture
- Friendships
- Achievement
- Joy

Include a button linking to the full gallery.

---

## Testimonials

Feature authentic testimonials from parents and students.

Focus on:

- Confidence
- Growth
- Professionalism
- Community
- Encouragement
- Positive experiences

---

## Final Call-to-Action

Finish the homepage with a strong invitation.

Headline:

**Ready to Begin Your Dance Journey?**

Supporting copy should encourage visitors to take the first step.

Buttons:

- Book a Trial Class
- Contact Us

---

# CONTENT STRATEGY

Every page should educate, inspire and reassure.

Avoid unnecessary filler content.

Every paragraph should answer a question, solve a concern or reinforce trust.

Use concise, conversational language that is professional yet welcoming.

Photography should communicate emotion before text is read.

---

# CALL-TO-ACTION STRATEGY

Calls-to-action should appear naturally throughout the website.

Primary CTA:

Book a Trial Class

Secondary CTAs:

- View Timetable
- Learn More
- Contact Us
- View Gallery
- Meet Jo

Calls-to-action should never feel aggressive.

Instead, they should invite visitors to become part of the JJDC community.

---

# SUCCESS CRITERIA

The website will be considered successful if a first-time visitor can confidently answer the following questions after browsing:

- Who is Jo Jackson Dance Company?
- What makes JJDC different?
- Why should I trust this studio?
- Which classes are available?
- Is there a suitable programme for me or my child?
- How do I contact the studio?
- How do I book a trial class?

If these questions are answered naturally through the visitor journey, the website architecture has achieved its purpose.


---

# USER PERSONAS & CUSTOMER JOURNEYS

## Purpose

A successful website is designed around people, not pages.

Jo Jackson Dance Company serves multiple audiences, each with different motivations, expectations and concerns.

This section defines who the website is for and how each visitor should experience the website.

Every design decision, piece of content and call-to-action should support one or more of these personas.

---

# PRIMARY PERSONA

## Parent Looking for the Right Dance Studio

This is the most important visitor.

Parents make the purchasing decision.

The website should therefore speak to parents first while remaining exciting for children.

### Profile

Typically between 28 and 50 years old.

May have little or no dance knowledge.

Often researching multiple studios.

Looking for reassurance before making contact.

---

### Goals

Find a trustworthy dance studio.

Help their child grow in confidence.

Develop discipline.

Encourage creativity.

Find positive role models.

Choose a safe environment.

Invest in quality training.

Join a welcoming community.

---

### Questions

Can I trust this studio?

Who is Jo Jackson?

What experience does she have?

Will my child be safe?

Will my child make friends?

What classes are available?

Does my child's age fit?

How much experience is required?

Will my child enjoy it?

How do I book?

---

### Concerns

Choosing the wrong studio.

Poor teaching quality.

Unsafe environment.

Lack of discipline.

Too much pressure.

Hidden costs.

Poor communication.

Children being overlooked.

---

### Emotional Needs

Confidence.

Trust.

Safety.

Professionalism.

Warmth.

Belonging.

Clear communication.

---

### Website Response

The website should answer these concerns before parents ask.

Use testimonials.

Professional photography.

Clear explanations.

Warm language.

Visible contact information.

Strong calls-to-action.

---

# SECONDARY PERSONA

## Young Dancer

Usually aged between 4 and 12.

Although children rarely make the final decision, they strongly influence it.

### Goals

Have fun.

Make friends.

Learn exciting dances.

Perform on stage.

Feel included.

Become more confident.

---

### Emotional Response

"This looks fun."

"I want to dance there."

"I wish I was one of those dancers."

The website should create excitement without becoming childish.

---

# THIRD PERSONA

## Teen Dancer

Teenagers are often more independent in their research.

They want a studio that feels modern, inspiring and ambitious.

---

### Goals

Improve skills.

Join competition teams.

Learn from professionals.

Express creativity.

Become technically stronger.

Meet like-minded dancers.

---

### Website Response

Professional imagery.

Competition highlights.

Advanced classes.

Studio achievements.

Guest choreographers.

Modern design.

---

# FOURTH PERSONA

## Adult Student

Adults may be returning to dance or starting for the first time.

Many seek enjoyment, fitness and confidence.

---

### Goals

Improve fitness.

Reduce stress.

Learn something new.

Meet people.

Enjoy movement.

---

### Website Response

Warm messaging.

Inclusive photography.

Adult class information.

Encouraging tone.

No intimidation.

---

# CUSTOMER JOURNEY

Every visitor follows a similar journey.

## Stage 1 — Discovery

A parent hears about JJDC.

Perhaps from:

Social media.

Google.

A friend.

A competition.

A school.

---

## Stage 2 — First Impression

Within five seconds the visitor should think:

"This looks professional."

The homepage must immediately establish trust.

---

## Stage 3 — Exploration

Visitors begin asking questions.

Who is Jo?

What classes are available?

What makes JJDC different?

Can I trust them?

Every page should naturally answer these questions.

---

## Stage 4 — Emotional Connection

The visitor begins imagining themselves or their child at JJDC.

Photography.

Stories.

Testimonials.

Videos.

Achievements.

Community.

All contribute to this emotional shift.

---

## Stage 5 — Decision

The visitor feels confident enough to enquire.

The website should make this step effortless.

Provide:

Book a Trial Class.

WhatsApp.

Phone.

Contact Form.

Directions.

---

## Stage 6 — Conversion

The enquiry process should be simple.

Minimal friction.

Fast responses.

Friendly communication.

Professional follow-up.

---

# EMOTIONAL JOURNEY

The visitor should experience the following emotions while exploring the website.

Curiosity

↓

Interest

↓

Trust

↓

Excitement

↓

Belonging

↓

Confidence

↓

Action

Every page should contribute to this emotional progression.

---

# DESIGN IMPLICATIONS

The website should never overwhelm visitors.

Information should be revealed gradually.

Large imagery should create emotion.

Whitespace should create breathing room.

Typography should create confidence.

Animations should support—not distract from—the content.

Every interaction should reinforce professionalism.

---

# SUCCESS METRICS

The website successfully serves its audience if visitors can confidently say:

"I trust this studio."

"My child would be happy here."

"This feels professional."

"I understand what they offer."

"I know what to do next."

"I want to book a trial class."

If the website consistently creates these thoughts, it has successfully fulfilled its purpose.


---

# INFORMATION ARCHITECTURE

## Purpose

Information Architecture defines how information is organised, connected and presented throughout the website.

Every page should have a clear purpose.

Every section should answer a specific question.

Every navigation decision should reduce confusion and guide visitors naturally towards booking a trial class.

The website should feel effortless to navigate regardless of whether visitors are using a desktop computer, tablet or mobile device.

---

# WEBSITE STRUCTURE

The website consists of six primary pages.

Home

About

Programs

Timetable

Gallery

Contact

These six pages provide everything a visitor needs to understand the studio, explore programmes and make contact without unnecessary complexity.

---

# SITE HIERARCHY

```
Home
│
├── About
│
├── Programs
│     ├── Pre Badge
│     ├── Badge Programme
│     ├── Jazz
│     ├── Hip Hop
│     ├── Contemporary
│     ├── Lyrical
│     ├── Adult Jazz
│     ├── Competition Teams
│     └── Private Lessons
│
├── Timetable
│
├── Gallery
│
└── Contact
```

The navigation should remain intentionally simple.

Avoid unnecessary dropdown menus unless future growth requires them.

---

# NAVIGATION PRINCIPLES

Navigation should always answer three questions.

Where am I?

Where can I go next?

How do I contact the studio?

Visitors should never feel lost.

Navigation should remain visible throughout the browsing experience.

---

# DESKTOP NAVIGATION

Layout

Logo

↓

Primary Navigation

Home

About

Programs

Timetable

Gallery

Contact

↓

Primary Button

Book a Trial Class

The navigation bar should remain sticky while scrolling.

A subtle background blur or elevated surface may be introduced after scrolling to improve readability without becoming distracting.

---

# MOBILE NAVIGATION

The mobile experience should be designed independently rather than simply shrinking the desktop layout.

Requirements

Sticky navigation

Large touch targets

Simple menu

Fast interactions

Visible WhatsApp button

Persistent "Book a Trial Class" button

Smooth opening and closing animations

Accessible tap areas

One-handed usability

Although inspired by native mobile applications, the experience must remain a responsive website.

---

# PAGE RELATIONSHIPS

Each page should naturally lead visitors towards another page.

Example journey

Home

↓

Programs

↓

Timetable

↓

Contact

↓

Book a Trial Class

Alternative journey

Home

↓

About

↓

Gallery

↓

Testimonials

↓

Book a Trial Class

There should never be dead ends.

Every page should encourage continued exploration.

---

# INTERNAL LINKING STRATEGY

Strategic internal links improve usability and SEO.

Examples

Home → Programs

Programs → Timetable

Programs → Contact

About → Gallery

Gallery → Contact

Timetable → Book a Trial Class

Contact → WhatsApp

Every important page should be reachable within three clicks.

---

# CONTENT HIERARCHY

Information should be presented from highest importance to lowest.

Level One

Trust

Identity

Value proposition

Level Two

Classes

Benefits

Teaching philosophy

Level Three

Timetable

Gallery

Testimonials

Frequently Asked Questions

Level Four

Policies

Dress code

Additional information

Supporting content should never compete with primary messaging.

---

# FOOTER ARCHITECTURE

The footer acts as the website's permanent information hub.

Include

Studio logo

Short description

Navigation links

Contact information

Phone number

Address

Social media links

Quick enquiry button

Copyright notice

Privacy Policy

Terms & Conditions

POPIA Privacy Notice

The footer should reinforce trust while providing easy access to essential information.

---

# GLOBAL CALL-TO-ACTION STRATEGY

Every page should contain at least one meaningful call-to-action.

Primary

Book a Trial Class

Secondary

View Timetable

Contact Us

Learn More

Explore Gallery

Calls-to-action should feel like natural next steps rather than sales prompts.

---

# SEARCH ENGINE STRUCTURE

Each page should target a specific search intent.

Examples

Home

Dance Studio in East London

About

About Jo Jackson Dance Company

Programs

Dance Classes in East London

Timetable

Dance Class Schedule East London

Gallery

Dance Studio Gallery East London

Contact

Contact Jo Jackson Dance Company

Every page should have a unique title, description and focus keyword.

---

# ACCESSIBILITY ARCHITECTURE

The website should be usable by all visitors.

Requirements

Logical heading structure

Keyboard navigation

Visible focus states

Descriptive alternative text

Sufficient colour contrast

Responsive layouts

Accessible forms

Readable typography

Accessibility should be considered from the beginning rather than added later.

---

# PERFORMANCE ARCHITECTURE

The website should feel fast regardless of internet connection.

Optimise

Images

Fonts

JavaScript

Animations

Lazy loading

Caching

Responsive image delivery

Excellent performance reinforces professionalism.

---

# FUTURE EXPANSION

The information architecture should allow future growth without redesigning the website.

Potential additions

News

Blog

Events

Competitions

Studio Shop

Online Registration

Parent Portal

Student Portal

Online Payments

Teacher Profiles

Award History

These features should integrate naturally into the existing navigation structure when required.

---

# ARCHITECTURAL PRINCIPLES

Every page must have a clear purpose.

Every click should move visitors closer to a goal.

Every navigation decision should reduce friction.

Every section should answer a real question.

Every page should reinforce trust.

Every interaction should feel premium.

Every visitor should know exactly what to do next.

The architecture should support both current business needs and future expansion while remaining simple, elegant and intuitive.



---

# PAGE BLUEPRINT SYSTEM

## Purpose

The Page Blueprint System defines every page of the website at a strategic level before any visual design or development begins.

Each page must have a clear objective.

Each section must answer a specific visitor question.

Every visual element, animation and call-to-action should support the page objective.

The goal is to remove guesswork from design and development by creating a complete blueprint for every page.

---

# HOME PAGE

## Primary Objective

Create an immediate emotional connection.

Build trust.

Communicate professionalism.

Encourage visitors to explore further.

Generate trial class enquiries.

---

## Success Criteria

When visitors leave the homepage they should know:

• Who JJDC is.

• What makes the studio different.

• Why parents trust the studio.

• Which classes are available.

• What opportunities exist.

• How to take the next step.

---

## Section Order

### Hero

Purpose

Create an emotional first impression.

Content

• Cinematic dance photography or video.

• Primary headline.

• Supporting statement.

• Primary CTA.

• Secondary CTA.

Animations

• Fade-in content.

• Slow background movement.

• Smooth button hover animations.

---

### Trust Indicators

Purpose

Build credibility within seconds.

Content

• Experienced Instruction

• Competition Teams

• All Ages Welcome

• Private Lessons

• East London Studio

• Safe Learning Environment

Visual Style

Premium cards with subtle icons.

---

### Why Dance?

Purpose

Sell the transformation rather than the classes.

Content

Dance develops:

Confidence

Discipline

Creativity

Friendships

Leadership

Fitness

Self-expression

Resilience

Visual Style

Large icon cards with soft hover effects.

---

### Meet Jo

Purpose

Create a personal connection.

Content

Professional portrait.

Story.

Teaching philosophy.

CTA to About page.

---

### Programs Overview

Purpose

Allow visitors to immediately identify the right class.

Display

Pre Badge

Badge Programme

Jazz

Hip Hop

Contemporary

Lyrical

Adult Jazz

Competition Teams

Private Lessons

Every programme links to detailed information.

---

### Student Journey

Purpose

Help parents visualise long-term growth.

Visual Timeline

First Lesson

↓

Confidence

↓

Technique

↓

Performance

↓

Competition

↓

Achievement

↓

Lifelong Memories

---

### Why JJDC?

Purpose

Communicate the studio's competitive advantage.

Content

Industry professionals.

Strong technique.

Versatility.

Positive culture.

Confidence.

Growth.

Family.

Innovation.

---

### Gallery Preview

Purpose

Show authentic studio life.

Images should include

Classes

Competitions

Performances

Backstage

Friendships

Celebrations

Energy

Joy

---

### Testimonials

Purpose

Allow parents to build trust through the experiences of others.

Testimonials should focus on

Confidence

Growth

Professionalism

Friendship

Community

Support

---

### Final CTA

Headline

Ready to Begin Your Dance Journey?

Buttons

Book a Trial Class

Contact Us

Purpose

Encourage immediate action.

---

# ABOUT PAGE

## Primary Objective

Help visitors understand who Jo Jackson is and why the studio exists.

---

## Sections

Studio Story

Mission

Vision

Core Values

Meet Jo

Teaching Philosophy

What Makes JJDC Different

Studio Culture

Guest Choreographers

Achievements

Final CTA

---

# PROGRAMS PAGE

## Primary Objective

Help visitors quickly identify the right programme.

Each programme should include

Description

Age Group

Skill Level

Benefits

Weekly Schedule

Attire

Recommended Progression

CTA

---

# TIMETABLE PAGE

## Primary Objective

Provide clear and easy access to the weekly class schedule.

Requirements

Desktop timetable.

Mobile accordion layout.

Printable version.

Future online booking compatibility.

---

# GALLERY PAGE

## Primary Objective

Allow visitors to experience the culture of JJDC through photography.

Categories

Studio Life

Classes

Competitions

Performances

Events

Behind the Scenes

Team Photos

Guest Workshops

Every image should communicate genuine emotion rather than posed perfection.

---

# CONTACT PAGE

## Primary Objective

Remove every possible barrier to contacting the studio.

Content

Phone

WhatsApp

Email

Address

Google Map

Opening Hours

Contact Form

Book Trial CTA

Directions

FAQ Summary

---

# GLOBAL PAGE REQUIREMENTS

Every page must include

Page Hero

Clear headline

Supporting copy

At least one CTA

Relevant imagery

Consistent spacing

Premium typography

Responsive layout

Accessibility compliance

SEO metadata

Structured data where applicable

---

# CONTENT HIERARCHY

Every page should follow the same pattern.

Introduction

↓

Trust

↓

Education

↓

Proof

↓

Call-to-Action

Visitors should never feel overwhelmed.

Information should be progressively disclosed as they scroll.

---

# IMAGE STRATEGY

Photography should always feel authentic.

Prioritise

Movement

Emotion

Interaction

Confidence

Celebration

Learning

Avoid

Low-quality images.

Artificial stock photography.

Overly staged poses.

Emotion is more valuable than perfection.

---

# CTA STRATEGY

Every page should encourage progression.

Never leave visitors wondering what to do next.

Primary CTA

Book a Trial Class

Supporting CTAs

Contact Us

View Timetable

Meet Jo

Explore Programs

View Gallery

Learn More

Calls-to-action should appear naturally throughout the experience without becoming repetitive.

---

# BLUEPRINT PRINCIPLES

Every page should answer questions before they are asked.

Every section should have a measurable purpose.

Every photograph should reinforce trust.

Every animation should guide attention.

Every headline should communicate value.

Every button should move visitors closer to becoming part of the JJDC family.

If a section does not educate, inspire, reassure or convert, it should not exist.



---

# CONTENT BLUEPRINT & CONTENT STRATEGY

## Purpose

Content is the heart of the Jo Jackson Dance Company website.

The objective is not simply to fill pages with information, but to create a meaningful narrative that builds trust, inspires confidence and encourages prospective students and parents to become part of the JJDC family.

Every piece of content must educate, reassure, inspire or motivate action.

No content should exist without a purpose.

---

# CONTENT PHILOSOPHY

The website should never feel like a brochure.

It should feel like a conversation.

Visitors should feel as though Jo Jackson is personally welcoming them into the studio, explaining the journey ahead and inviting them to become part of the JJDC community.

Every paragraph should strengthen that relationship.

---

# CONTENT PRINCIPLES

Every piece of content should achieve at least one of the following:

Educate

Inspire

Build Trust

Reduce Anxiety

Answer Questions

Celebrate Students

Highlight Excellence

Encourage Action

Strengthen the Brand

If content does not serve one or more of these purposes, it should be revised or removed.

---

# CONTENT HIERARCHY

Content should always appear in the following order of importance.

## Level 1 — Emotional Content

Purpose

Create an emotional connection before presenting information.

Examples

Studio philosophy

Mission

Vision

Student success

Parent testimonials

Studio culture

Professional photography

---

## Level 2 — Trust Content

Purpose

Provide reassurance.

Examples

What Makes JJDC Different

Jo's experience

Competition achievements

Industry workshops

Professional training

Safe learning environment

Parent feedback

---

## Level 3 — Educational Content

Purpose

Help visitors understand the services offered.

Examples

Programmes

Dance styles

Benefits of dance

Teaching methodology

Student progression

---

## Level 4 — Practical Content

Purpose

Answer logistical questions.

Examples

Timetable

Dress code

Contact information

Studio location

Frequently asked questions

---

## Level 5 — Supporting Content

Purpose

Strengthen the overall experience.

Examples

Gallery

Videos

Policies

Studio apparel

Future news articles

Events

---

# CONTENT MAPPING

Every major piece of information should have a dedicated home.

## Homepage

Purpose

Inspire.

Build trust.

Create excitement.

Content

Hero

Studio philosophy

Benefits of dance

Programs overview

Student journey

Gallery preview

Testimonials

Final CTA

---

## About

Purpose

Build credibility.

Content

Studio story

Meet Jo

Mission

Vision

Values

Teaching philosophy

What Makes JJDC Different

Achievements

---

## Programs

Purpose

Educate.

Content

Every dance style

Age groups

Benefits

Progression

Attire

Frequently asked questions relating to programmes

---

## Timetable

Purpose

Provide clear scheduling information.

Content

Weekly timetable

Class times

Studio locations if expanded in the future

Notes regarding private lessons

---

## Gallery

Purpose

Allow visitors to experience studio life visually.

Content

Competitions

Classes

Events

Friendships

Workshops

Behind the scenes

Performances

Celebrations

---

## Contact

Purpose

Encourage enquiries.

Content

Phone

WhatsApp

Email

Address

Map

Opening hours

Contact form

Social media

---

# EXISTING CONTENT INVENTORY

The following content has already been collected and must be incorporated into the website.

## Studio Information

Studio name

Phone number

Address

---

## Timetable

Complete weekly class timetable.

This should appear on the Timetable page while selected highlights can also appear on the Homepage and Programs page.

---

## Dance Programmes

Pre Badge

Badge Programme

Jazz

Hip Hop

Contemporary

Lyrical

Competition Teams

Private Lessons

Adult Jazz

---

## Studio Philosophy

Dance builds confidence.

Strong technique creates successful dancers.

Versatility is encouraged.

Students develop at their own pace.

Examinations are encouraged but never compulsory.

Competitions are opportunities for growth rather than pressure.

Every dancer matters.

These ideas should appear throughout the website rather than only on the About page.

---

## What Makes JJDC Different

This content is one of the studio's strongest competitive advantages.

Key themes include:

Bringing industry professionals to East London.

Developing versatile dancers.

Technical excellence.

Supportive teaching.

Innovation.

Community.

Personal growth.

These messages should be reinforced throughout multiple pages.

---

## Class Attire

This information should appear on:

Parent Information sections.

Programme descriptions.

Frequently Asked Questions.

Future Studio Shop.

Competition information.

Relevant reminders throughout the website.

---

## Studio Apparel

Official branded clothing should be introduced as part of the studio identity.

Future online ordering capability should be considered during planning.

---

# FUTURE CONTENT

The website architecture should accommodate future content without redesign.

Examples include:

News

Blog articles

Competition results

Student achievements

Guest choreographers

Workshops

Holiday programmes

Events

Community outreach

New dance programmes

Teacher profiles

Studio announcements

---

# PHOTOGRAPHY STRATEGY

Photography is one of the most important storytelling tools.

Prioritise images showing:

Joy

Confidence

Movement

Technique

Friendship

Achievement

Energy

Community

Pride

Parents should be able to imagine their own child in these moments.

---

# VIDEO STRATEGY

Future videos should include:

Studio walkthrough

Classes

Performances

Competitions

Student stories

Behind-the-scenes moments

Guest choreographers

Videos should feel authentic, energetic and professionally produced.

---

# TESTIMONIAL STRATEGY

Testimonials should be collected from:

Parents

Children

Teenagers

Adult students

Competition dancers

Testimonials should focus on transformation rather than simply saying the studio is good.

Examples include:

Increased confidence.

Improved discipline.

New friendships.

Personal growth.

Professional instruction.

Positive studio culture.

---

# CONTENT GOVERNANCE

The website should evolve over time.

Every new piece of information received from Jo Jackson should be reviewed and categorised before publication.

Each item should be assigned to one of the following:

Immediate website content.

Future website content.

Supporting documentation.

Future feature.

Marketing content.

No valuable information should be discarded.

The Master Project Context Document should always remain the single source of truth.

---

# CONTENT SUCCESS PRINCIPLES

Visitors should never feel overwhelmed.

Content should feel conversational rather than corporate.

The website should answer questions before they are asked.

Every page should tell part of the JJDC story.

Every piece of content should contribute to trust, confidence and action.

If content does not strengthen the visitor's experience, it should not be included.



---

# BRAND GUIDELINES & VISUAL IDENTITY SYSTEM

## Purpose

The visual identity of Jo Jackson Dance Company should immediately communicate professionalism, warmth, confidence and joy.

The design should appeal primarily to parents while remaining energetic and inspiring for children, teenagers and adult dancers.

The website should never feel childish.

Instead, it should feel like the digital presence of a premium performing arts academy.

Every visual decision should reinforce trust, excellence and community.

---

# BRAND PERSONALITY

The JJDC brand should consistently communicate the following qualities.

Professional

Warm

Welcoming

Premium

Elegant

Confident

Energetic

Creative

Disciplined

Inspiring

Supportive

Authentic

Family-Oriented

Modern

Positive

Every page, photograph, animation and interaction should reinforce these characteristics.

---

# BRAND POSITIONING

Jo Jackson Dance Company is positioned as a premium dance academy that develops technically strong, versatile and confident dancers within a welcoming and supportive environment.

The studio is recognised not only for dance education but for building confident young people through discipline, creativity and opportunity.

The brand should communicate excellence without intimidation.

Professionalism without arrogance.

Discipline without pressure.

Achievement without sacrificing joy.

---

# COLOUR SYSTEM

The colour palette is intentionally simple.

A restrained palette creates a stronger premium identity than using many colours.

## Primary Colour

Turquoise

Purpose

Energy

Movement

Optimism

Freshness

Creativity

Youthfulness

Confidence

Primary uses

Buttons

Highlights

Icons

Interactive elements

Links

Active navigation

Key statistics

Important headings

Hover states

---

## Secondary Colour

White

Purpose

Elegance

Cleanliness

Space

Calmness

Sophistication

Primary uses

Page backgrounds

Cards

Content areas

Forms

Whitespace

---

## Supporting Colour

Black

Purpose

Authority

Professionalism

Luxury

Readability

Contrast

Primary uses

Headings

Navigation

Body text

Footer

Important UI elements

---

## Neutral Colours

Use subtle neutral greys where required.

Purpose

Depth

Layering

Borders

Dividers

Background variation

Neutrals should never dominate the design.

---

# COLOUR PRINCIPLES

Turquoise attracts attention.

White provides breathing space.

Black anchors the design.

Every screen should maintain visual balance.

Avoid excessive gradients.

Avoid unnecessary accent colours.

Use restraint.

Premium design is achieved through consistency rather than decoration.

---

# TYPOGRAPHY

Typography should feel modern, elegant and highly readable.

Requirements

Large headings.

Comfortable paragraph spacing.

Clear visual hierarchy.

Excellent readability on mobile.

Minimal font pairing.

Avoid decorative fonts.

The typography should communicate confidence rather than playfulness.

---

# TYPOGRAPHIC HIERARCHY

Display Heading

Used only for hero sections.

Large.

Bold.

Emotionally engaging.

---

Primary Heading

Used for page titles.

Strong.

Professional.

Easy to scan.

---

Secondary Heading

Introduces major sections.

Creates rhythm.

Improves readability.

---

Body Text

Conversational.

Warm.

Comfortable reading length.

Accessible line height.

Readable across all devices.

---

Caption Text

Used sparingly.

Suitable for image descriptions and supporting information.

---

# ICONOGRAPHY

Icons should be simple.

Minimal.

Consistent.

Modern.

Outlined or softly rounded.

Avoid cartoon icons.

Avoid novelty illustrations.

Icons should support content rather than dominate it.

---

# PHOTOGRAPHY STYLE

Photography is one of the strongest storytelling tools.

Every image should communicate emotion before information.

Prioritise images showing

Movement

Confidence

Joy

Achievement

Friendship

Concentration

Performance

Celebration

Growth

Community

---

# PHOTOGRAPHY PRINCIPLES

Use genuine studio photography whenever possible.

Avoid obvious stock photography.

Capture authentic moments.

Show interaction between teachers and students.

Show dancers celebrating achievements.

Show parents supporting performances.

Show diversity across age groups.

Images should tell stories rather than simply decorate pages.

---

# VIDEO STYLE

Videos should feel cinematic but authentic.

Suggested content

Studio walkthrough

Training sessions

Performances

Competitions

Behind the scenes

Workshops

Student interviews

Parent testimonials

Videos should focus on emotion rather than special effects.

---

# VISUAL LANGUAGE

Every interface element should feel light, refined and intentional.

Characteristics

Rounded corners.

Soft shadows.

Generous spacing.

Balanced layouts.

Elegant typography.

Subtle layering.

Refined micro-interactions.

Avoid visual clutter.

---

# CARD DESIGN

Cards should communicate premium quality.

Characteristics

Soft radius.

Clean borders.

Comfortable padding.

Subtle elevation.

Smooth hover animations.

Consistent spacing.

Cards should feel tactile without becoming overly decorative.

---

# BUTTON DESIGN

Buttons should immediately communicate action.

Primary Button

Turquoise background.

White text.

Rounded corners.

Smooth hover animation.

High contrast.

---

Secondary Button

White background.

Turquoise border.

Turquoise text.

Hover transitions to filled turquoise.

---

Text Button

Minimal styling.

Used for supporting actions.

Clear hover state.

---

# FORM DESIGN

Forms should feel approachable.

Requirements

Clear labels.

Large inputs.

Visible focus states.

Helpful validation messages.

Minimal required fields.

Accessible keyboard navigation.

Every form should reduce friction rather than create it.

---

# SPACING SYSTEM

Whitespace is a design element.

It should never be considered empty space.

Use generous spacing between sections.

Allow content room to breathe.

Avoid overcrowded layouts.

Consistency is more important than density.

---

# CONSISTENCY PRINCIPLES

Every page should feel like part of the same experience.

Navigation.

Buttons.

Cards.

Typography.

Colours.

Animations.

Spacing.

Imagery.

All should follow the same design language.

Visitors should never feel they have moved to a different website.

---

# ACCESSIBILITY

The visual identity must remain accessible.

Maintain strong colour contrast.

Readable typography.

Clear focus indicators.

Responsive layouts.

Accessible form controls.

The premium experience should be inclusive.

---

# VISUAL SUCCESS CRITERIA

The visual identity has achieved its purpose when visitors describe the website as:

Professional.

Beautiful.

Warm.

Modern.

Trustworthy.

Premium.

Welcoming.

Energetic.

Confident.

If the design communicates these emotions consistently, the visual identity has successfully represented Jo Jackson Dance Company.


---

# DESIGN SYSTEM & UI COMPONENT LIBRARY

## Purpose

The Design System establishes a unified collection of reusable interface components, interaction patterns and design rules that ensure every page of the Jo Jackson Dance Company website feels cohesive, premium and professionally crafted.

Rather than designing each page independently, the website should be built from a consistent library of reusable components.

Every component should support the brand identity while maintaining excellent usability, accessibility and responsiveness.

---

# DESIGN PHILOSOPHY

The interface should feel effortless.

Users should never need to think about how to use the website.

Every interaction should feel natural.

Every animation should feel intentional.

Every component should contribute to clarity rather than decoration.

The design system should prioritise:

Consistency

Readability

Accessibility

Performance

Scalability

Maintainability

Visual Harmony

---

# DESIGN PRINCIPLES

Every component should follow these principles.

Simple before complex.

Elegant before decorative.

Functional before fashionable.

Consistent before creative.

Accessible before aesthetic.

Fast before flashy.

---

# GRID SYSTEM

The website should be based on a responsive grid.

Desktop

Maximum content width of approximately 1200–1400px.

Tablet

Comfortable two-column layouts where appropriate.

Mobile

Single-column layouts with generous spacing and large touch targets.

Content should always remain centred and visually balanced.

---

# SPACING SYSTEM

Spacing should be consistent throughout the website.

Large spacing between major sections.

Medium spacing between related content.

Small spacing within cards and forms.

Whitespace should create rhythm and improve readability.

Crowded layouts should be avoided.

---

# BORDER RADIUS

Rounded corners should communicate warmth and approachability.

Apply consistently across:

Buttons

Cards

Images

Forms

Navigation elements

Modals

Radius values should remain consistent across the entire site.

---

# SHADOW SYSTEM

Shadows should create subtle depth.

Avoid harsh or exaggerated effects.

Cards should appear slightly elevated.

Hover interactions may slightly increase elevation.

Depth should enhance hierarchy rather than distract.

---

# BUTTON LIBRARY

## Primary Button

Purpose

Main conversion actions.

Examples

Book a Trial Class

Register

Contact Us

Characteristics

High contrast.

Rounded.

Strong visual presence.

Animated hover state.

Visible keyboard focus.

---

## Secondary Button

Purpose

Supporting actions.

Examples

Learn More

View Timetable

Meet Jo

Characteristics

Outlined.

Lighter visual weight.

Consistent hover transition.

---

## Ghost Button

Purpose

Low-priority actions.

Characteristics

Minimal styling.

Clear hover indication.

Never compete with primary buttons.

---

# CARD SYSTEM

Cards are one of the primary layout components.

Types

Programme Cards

Testimonial Cards

Gallery Cards

Feature Cards

Benefit Cards

Event Cards

Competition Cards

Staff Cards

Every card should maintain consistent spacing, typography and hover behaviour.

---

# HERO COMPONENT

Every major page should begin with a hero section.

Requirements

Clear headline.

Supporting copy.

High-quality imagery.

Primary CTA.

Optional secondary CTA.

Subtle motion.

Excellent readability.

---

# SECTION HEADERS

Each section should begin with:

Eyebrow label (optional)

Headline

Supporting paragraph

This creates a consistent rhythm throughout the website.

---

# IMAGE COMPONENTS

Image styles should include:

Standard images

Feature images

Gallery images

Portrait images

Background images

All images should support responsive loading.

Maintain consistent aspect ratios where appropriate.

---

# GALLERY COMPONENT

Requirements

Responsive masonry or grid layout.

Smooth hover interactions.

Lightbox viewing.

Keyboard navigation.

Touch-friendly mobile experience.

Fast image loading.

Lazy loading.

---

# TESTIMONIAL COMPONENT

Each testimonial should include:

Quote

Student or parent name

Optional photo

Optional programme

Optional achievement

Testimonials should feel genuine rather than promotional.

---

# PROGRAMME CARD

Each programme card should include:

Programme name

Age group

Short description

Benefits

Image

CTA

Cards should encourage exploration rather than overwhelm with information.

---

# TIMETABLE COMPONENT

Desktop

Structured timetable grid.

Mobile

Accordion layout.

Touch-friendly navigation.

Easy readability.

Future booking compatibility.

---

# CONTACT COMPONENT

The contact section should include:

Phone

WhatsApp

Email

Address

Google Map

Business hours

Contact form

Quick enquiry button

Everything should remain accessible within one screen on mobile where practical.

---

# FORM COMPONENTS

Forms should be simple.

Fields should include:

Clear labels.

Helpful placeholders.

Accessible validation.

Visible error states.

Confirmation messages.

Required fields should be minimised.

---

# ICON SYSTEM

Icons should remain consistent.

Characteristics

Minimal.

Modern.

Rounded.

Simple.

Readable.

Supportive.

Icons should never replace text where clarity is required.

---

# NAVIGATION COMPONENT

Requirements

Sticky navigation.

Responsive behaviour.

Active page indicator.

Smooth transitions.

Accessible keyboard navigation.

Large touch targets on mobile.

Logo always visible.

Primary CTA always accessible.

---

# FOOTER COMPONENT

The footer should include:

Studio logo.

Short description.

Navigation.

Contact details.

Social links.

Legal pages.

Privacy Policy.

POPIA Notice.

Copyright.

Book Trial CTA.

The footer should reinforce professionalism and trust.

---

# DIVIDERS & SECTION TRANSITIONS

Transitions between sections should feel smooth.

Use whitespace first.

Subtle dividers where necessary.

Avoid heavy separators.

Allow content to breathe.

---

# MICRO-INTERACTIONS

Micro-interactions should enhance usability.

Examples

Button hover.

Card elevation.

Navigation transitions.

Form focus.

Accordion expansion.

Gallery hover.

Image zoom.

Link underline animations.

Interactions should feel responsive without becoming distracting.

---

# LOADING EXPERIENCE

The website should always communicate progress.

Use:

Image placeholders.

Smooth fade-ins.

Lazy loading.

Graceful loading states.

Avoid visible layout shifts.

---

# EMPTY STATES

Future dynamic sections should include thoughtful empty states.

Examples

No events available.

Gallery updating soon.

Timetable changes coming soon.

Always provide helpful messaging.

---

# RESPONSIVE BEHAVIOUR

Every component must adapt elegantly.

Desktop

Tablet

Large Mobile

Small Mobile

Portrait

Landscape

No component should break or overlap.

---

# COMPONENT REUSABILITY

Components should be reusable across the entire website.

This reduces maintenance.

Improves consistency.

Simplifies future development.

Supports scalability.

---

# DESIGN SYSTEM SUCCESS CRITERIA

The design system has succeeded when:

Every page feels connected.

Every interaction feels familiar.

Every component behaves consistently.

Users instinctively understand the interface.

The website remains easy to extend as JJDC grows.

Future pages can be built entirely from the existing component library without redesigning the interface.



---

# MOTION DESIGN & INTERACTION SYSTEM

## Purpose

Motion is a communication tool.

Every animation should improve understanding, guide attention, reinforce hierarchy or provide meaningful feedback.

Motion should never become distracting.

Visitors should notice how smooth the website feels rather than noticing the animations themselves.

The overall experience should feel elegant, premium and effortless.

---

# MOTION PHILOSOPHY

The website should feel alive.

Animations should create a sense of craftsmanship.

Movement should communicate confidence.

Interactions should feel responsive.

Scrolling should feel smooth.

Transitions should feel intentional.

Nothing should feel abrupt.

---

# MOTION PRINCIPLES

Every animation should satisfy one or more of the following objectives.

Guide Attention

Provide Feedback

Create Delight

Improve Navigation

Reduce Cognitive Load

Communicate State Changes

Reinforce Hierarchy

Support Storytelling

If an animation serves none of these purposes, it should not exist.

---

# OVERALL EXPERIENCE

The browsing experience should feel calm and fluid.

Avoid excessive motion.

Avoid flashy effects.

Avoid long delays.

The website should remain highly usable while feeling polished.

---

# PAGE LOAD EXPERIENCE

When the website first loads:

The navigation should appear first.

The hero image or video should gently fade into view.

Headline.

Supporting text.

Primary CTA.

Secondary CTA.

Each element should appear in a carefully staggered sequence.

Visitors should immediately understand where to look first.

---

# SCROLL EXPERIENCE

Scrolling should reveal content naturally.

Each section should appear smoothly as it enters the viewport.

Sections should never suddenly appear.

Animations should feel subtle and confident.

Recommended effects include:

Fade

Slide

Soft upward movement

Opacity transitions

Very small scale transitions

Avoid exaggerated movement.

---

# HERO ANIMATIONS

Hero sections should establish the emotional tone.

Possible motion:

Slow cinematic background movement.

Soft parallax effect.

Headline fade-in.

Supporting text fade.

Buttons appear last.

Motion should draw attention without competing with the content.

---

# NAVIGATION BEHAVIOUR

Navigation should remain visible.

Requirements

Sticky navigation.

Smooth background transition after scrolling.

Active page indicator.

Elegant mobile menu animation.

Responsive hover effects.

Navigation should always feel stable.

---

# BUTTON INTERACTIONS

Buttons should communicate responsiveness.

Hover

Subtle elevation.

Gentle colour transition.

Cursor feedback.

Keyboard focus.

Click

Short press animation.

Instant visual response.

Accessible focus state.

Buttons should feel tactile.

---

# CARD INTERACTIONS

Cards should encourage exploration.

Hover

Slight elevation.

Gentle shadow increase.

Small upward movement.

Optional image zoom.

Never exaggerate movement.

Cards should remain readable.

---

# IMAGE INTERACTIONS

Images should feel immersive.

Gallery

Soft zoom on hover.

Lightbox transition.

Smooth image loading.

Portraits

Subtle scaling.

Maintain sharpness.

Background images

Slow movement only where appropriate.

---

# GALLERY EXPERIENCE

The gallery should feel premium.

Requirements

Smooth image loading.

Elegant hover transitions.

Lightbox animations.

Swipe support on mobile.

Keyboard navigation.

Image preloading where appropriate.

The gallery should encourage exploration.

---

# TIMETABLE INTERACTIONS

Desktop

Hover highlights.

Clear row focus.

Easy scanning.

Mobile

Accordion expansion.

Smooth opening.

Simple navigation.

Fast interaction.

---

# FORM INTERACTIONS

Forms should reassure users.

Focus

Smooth border transition.

Visible active state.

Helpful guidance.

Validation

Real-time feedback.

Friendly messaging.

Confirmation

Positive success animation.

Clear completion message.

---

# ACCORDIONS

Accordions should expand naturally.

Animation should communicate opening and closing.

Avoid sudden jumps.

Maintain scroll position where practical.

---

# PAGE TRANSITIONS

If page transitions are implemented:

Fade between pages.

Maintain navigation continuity.

Avoid long loading delays.

Transitions should feel almost invisible.

---

# MICRO-INTERACTIONS

Examples include:

Navigation hover.

Button hover.

Link underline animation.

Card hover.

Image zoom.

Form focus.

Accordion expansion.

Icon rotation.

Loading indicators.

These interactions should make the website feel responsive.

---

# LOADING STATES

Loading should communicate progress.

Use

Skeleton loaders.

Image placeholders.

Progress indicators where appropriate.

Avoid blank screens.

Avoid layout shifts.

---

# ERROR STATES

Error messages should remain friendly.

Provide clear guidance.

Avoid technical language.

Encourage users to continue.

---

# SUCCESS STATES

Successful interactions should feel rewarding.

Examples

Form submitted.

Enquiry sent.

Gallery loaded.

Button completed.

Use subtle animations to reinforce completion.

---

# MOBILE INTERACTION DESIGN

The mobile experience should feel exceptionally refined.

Requirements

One-handed usability.

Large touch targets.

Natural scrolling.

Responsive gestures.

Fast menu transitions.

Floating WhatsApp button.

Persistent trial class CTA.

The experience should resemble the polish of a premium mobile application while remaining a responsive website.

---

# ACCESSIBILITY

Motion should never reduce usability.

Provide reduced-motion support for users who prefer minimal animations.

Ensure animations do not interfere with readability.

Avoid flashing or rapidly repeating effects.

Maintain keyboard accessibility throughout.

---

# PERFORMANCE

Animations should remain lightweight.

Prefer CSS transforms and opacity over layout-changing animations.

Avoid unnecessary JavaScript animation libraries where native browser capabilities are sufficient.

Motion should never negatively impact Core Web Vitals.

---

# EMOTIONAL DESIGN

The website should create the following emotional progression.

Curiosity

↓

Comfort

↓

Trust

↓

Excitement

↓

Belonging

↓

Confidence

↓

Action

Motion should quietly support this emotional journey.

---

# MOTION SUCCESS CRITERIA

The motion system has succeeded when visitors describe the website as:

Smooth.

Modern.

Premium.

Professional.

Responsive.

Elegant.

Polished.

Effortless.

Visitors should remember how the website made them feel, not the animations themselves.

Motion should always support the story of Jo Jackson Dance Company rather than compete with it.


---

# TECHNICAL ARCHITECTURE & DEVELOPMENT STANDARDS

## Purpose

The technical architecture defines how the Jo Jackson Dance Company website should be engineered to ensure long-term maintainability, performance, accessibility, scalability and reliability.

The objective is to create a website that is beautiful on the surface and equally well-engineered underneath.

The codebase should be clean, modular, semantic and easy for future developers to understand.

---

# DEVELOPMENT PHILOSOPHY

The website should be developed using modern front-end best practices.

Every decision should prioritise:

Performance

Accessibility

Maintainability

Scalability

Readability

Security

SEO

Progressive Enhancement

The website should continue working even if optional enhancements fail to load.

---

# TECHNOLOGY STACK

Core Technologies

HTML5

CSS3

Modern JavaScript (ES6+)

No unnecessary frameworks should be introduced unless they provide a measurable benefit.

The project should remain lightweight, portable and easy to deploy.

---

# HTML STANDARDS

Use semantic HTML throughout.

Examples include:

<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

Proper document structure must be maintained.

Headings should follow a logical hierarchy.

Only one H1 should exist per page.

Lists should use semantic list elements.

Buttons should use `<button>` where appropriate.

Navigation should use proper landmark roles.

---

# CSS ARCHITECTURE

CSS should be organised into logical modules.

Suggested structure

Base

Typography

Variables

Utilities

Layout

Components

Sections

Pages

Animations

Responsive

Avoid duplicated styles.

Prefer reusable utility classes where appropriate.

Use CSS custom properties for colours, spacing and typography.

---

# DESIGN TOKENS

Store reusable values as variables.

Examples

Colours

Spacing

Typography

Border radius

Shadows

Animation durations

Transitions

Breakpoints

This ensures consistency across the entire website.

---

# JAVASCRIPT PRINCIPLES

JavaScript should enhance the experience rather than define it.

Requirements

Modular code.

Reusable functions.

Meaningful variable names.

Minimal global scope.

Graceful error handling.

Progressive enhancement.

Avoid unnecessary dependencies.

---

# FILE STRUCTURE

Suggested structure

```
/
│
├── index.html
├── about.html
├── programs.html
├── timetable.html
├── gallery.html
├── contact.html
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── videos/
│   ├── fonts/
│   ├── icons/
│   └── documents/
│
├── components/
│
├── data/
│
├── docs/
│
└── README.md
```

Folder names should remain descriptive and organised.

---

# COMPONENT STRUCTURE

Reusable components should include

Navigation

Footer

Buttons

Cards

Gallery

Testimonials

Forms

Hero sections

Call-to-action sections

Components should minimise duplicated markup.

---

# RESPONSIVE DESIGN

The website should follow a mobile-first approach.

Primary breakpoints

Small Mobile

Large Mobile

Tablet

Laptop

Desktop

Large Desktop

Layouts should adapt naturally rather than simply shrinking desktop content.

---

# PERFORMANCE STANDARDS

Target

Google Lighthouse Performance Score:

95+

Core Web Vitals should meet or exceed Google's recommended thresholds.

Optimise

Images

Fonts

JavaScript

CSS

Video loading

Lazy loading

Caching

Compression

Performance should never be sacrificed for visual effects.

---

# IMAGE OPTIMISATION

Use modern image formats where supported.

Provide responsive image sizes.

Implement lazy loading.

Compress without noticeable quality loss.

Avoid oversized images.

Decorative images should not block page rendering.

---

# FONT OPTIMISATION

Limit font families.

Limit font weights.

Preload primary fonts.

Use system font fallbacks.

Prevent layout shifts during font loading.

---

# SEO STANDARDS

Every page should include

Unique title

Unique meta description

Canonical URL

Open Graph tags

Twitter Cards

Structured data

Robots directives

XML sitemap compatibility

The website should be engineered for excellent search engine visibility.

---

# SCHEMA MARKUP

Implement structured data where appropriate.

Examples

Local Business

Organisation

Website

Breadcrumbs

Contact Information

FAQ

Image metadata

Schema should improve search visibility without introducing unnecessary complexity.

---

# ACCESSIBILITY

Target WCAG 2.2 AA compliance.

Requirements

Keyboard navigation.

Visible focus indicators.

Semantic HTML.

Accessible forms.

ARIA only where necessary.

Sufficient colour contrast.

Descriptive alt text.

Logical heading structure.

Accessibility is a core requirement rather than an optional enhancement.

---

# SECURITY

The website should follow secure development practices.

Requirements

Sanitise form input.

Validate client-side and server-side.

Use HTTPS.

Avoid exposing unnecessary information.

Protect against common vulnerabilities.

Handle third-party integrations securely.

---

# FORM HANDLING

The enquiry form should:

Validate input.

Display friendly errors.

Prevent duplicate submissions.

Provide clear confirmation messages.

Support future CRM integration.

Support Formspree initially.

Allow migration to a custom backend later.

---

# THIRD-PARTY INTEGRATIONS

Potential integrations include

Google Analytics

Google Search Console

Google Maps

WhatsApp

Facebook

Instagram

Formspree

Future booking platform

Future payment gateway

All integrations should load asynchronously where possible.

---

# BROWSER SUPPORT

Support current versions of

Chrome

Edge

Firefox

Safari

Mobile Safari

Chrome for Android

Progressive enhancement should be used where newer features are unavailable.

---

# ERROR HANDLING

Provide user-friendly error messages.

Avoid exposing technical details.

Gracefully handle missing images, unavailable resources and failed requests.

---

# CODE QUALITY

Requirements

Consistent formatting.

Meaningful naming.

Modular architecture.

Inline comments only where necessary.

No dead code.

No duplicated logic.

Readable structure.

Future developers should understand the project quickly.

---

# DOCUMENTATION

The project should include

README

Deployment instructions

Folder structure overview

Image guidelines

Content update instructions

Maintenance notes

Future feature roadmap

Documentation should simplify long-term maintenance.

---

# DEPLOYMENT

The website should be deployable to static hosting providers such as:

GitHub Pages

Cloudflare Pages

Netlify

Vercel

Traditional web hosting

Deployment should require minimal configuration.

---

# VERSION CONTROL

Use Git throughout development.

Recommended workflow

Feature branches.

Meaningful commit messages.

Pull request reviews where applicable.

Clear release tags.

Maintain a clean commit history.

---

# FUTURE SCALABILITY

The architecture should support future additions including

Online registrations

Parent portal

Student portal

Studio shop

Online payments

News

Events

Blog

Teacher profiles

Competition results

New features should integrate without requiring major architectural changes.

---

# TECHNICAL SUCCESS CRITERIA

The technical architecture has succeeded when:

The website loads quickly.

The code is clean and maintainable.

Accessibility standards are met.

SEO is fully implemented.

Future features can be added easily.

Performance remains excellent.

The website is reliable across all modern devices and browsers.

The engineering quality matches the premium standard of the Jo Jackson Dance Company brand.



---

# AI DEVELOPMENT DIRECTIVE & PROJECT EXECUTION MANUAL

## Purpose

This document serves as the operating manual for any AI assistant, developer or designer working on the Jo Jackson Dance Company website.

It defines how decisions should be made throughout the project.

The AI must not simply generate code.

It must think like a Creative Director, UX Designer, Brand Strategist, Front-End Architect, SEO Specialist, Accessibility Expert and Performance Engineer simultaneously.

Every decision must strengthen the JJDC brand.

---

# PRIMARY MISSION

Create one of the highest-quality dance studio websites in South Africa.

The website should position Jo Jackson Dance Company as a premium, modern and trusted dance academy while remaining warm, welcoming and family-oriented.

The objective is not merely to build a website.

The objective is to build confidence before a parent ever contacts the studio.

---

# CORE PRINCIPLES

Every decision must satisfy at least one of the following:

Build Trust

Improve Usability

Increase Clarity

Strengthen the Brand

Improve Accessibility

Improve Performance

Increase Conversions

Reduce Friction

Support Long-Term Growth

If a decision satisfies none of these principles, reconsider it.

---

# THINK BEFORE BUILDING

Before creating any page, section or component, ask:

Why does this exist?

Who benefits from it?

What question does it answer?

How does it support the visitor journey?

How does it strengthen the JJDC brand?

How does it encourage the next action?

Never add elements simply because other websites have them.

---

# UNDERSTAND THE AUDIENCE

Remember that the primary audience is parents.

Secondary audiences include:

Children

Teenagers

Adult dancers

Every page should reassure parents while inspiring dancers.

The website should balance professionalism with warmth.

---

# UNDERSTAND THE BRAND

Jo Jackson Dance Company is not selling dance lessons.

The studio is helping people become:

More confident.

More disciplined.

More creative.

More resilient.

More expressive.

Every page should communicate transformation rather than transactions.

---

# STORYTELLING RULES

Every page should tell part of a larger story.

Visitors should naturally progress through:

Curiosity

↓

Interest

↓

Trust

↓

Connection

↓

Confidence

↓

Action

Never overwhelm visitors with information.

Reveal information progressively.

---

# CONTENT RULES

Use all approved project content.

Do not invent facts.

Do not exaggerate achievements.

If information is missing, leave placeholders or request clarification rather than making assumptions.

Content should remain authentic.

---

# DESIGN DECISION FRAMEWORK

When multiple design options exist, choose the one that is:

Cleaner.

Simpler.

More accessible.

More elegant.

More maintainable.

More consistent.

More performant.

Less distracting.

Premium design is achieved through restraint.

---

# TYPOGRAPHY RULES

Typography should communicate confidence.

Maintain generous spacing.

Avoid decorative effects.

Never sacrifice readability for style.

Use clear hierarchy.

Headings should guide visitors naturally.

---

# COLOUR RULES

Turquoise is the primary accent.

White creates space.

Black creates authority.

Avoid introducing unnecessary colours.

Every colour should have a functional purpose.

---

# COMPONENT RULES

Every component should be reusable.

Avoid duplicate implementations.

If a component already exists, extend it rather than recreating it.

Consistency always takes priority.

---

# MOTION RULES

Animations should support understanding.

Never animate purely for decoration.

Motion should remain subtle.

Fast.

Smooth.

Purposeful.

Respect reduced-motion preferences.

---

# ACCESSIBILITY RULES

Accessibility is mandatory.

Every interactive element must be keyboard accessible.

Every image must include meaningful alternative text.

Forms must provide clear labels and validation.

Maintain WCAG 2.2 AA compliance wherever practical.

---

# PERFORMANCE RULES

Performance is part of the user experience.

Optimise:

Images.

Fonts.

CSS.

JavaScript.

Videos.

Animations.

Aim for a Lighthouse score of 95 or higher.

Do not sacrifice performance for visual effects.

---

# SEO RULES

Every page must include:

Unique title.

Unique meta description.

Semantic structure.

Structured data where appropriate.

Logical heading hierarchy.

Descriptive URLs.

Meaningful internal linking.

SEO should support users first and search engines second.

---

# MOBILE-FIRST RULES

The mobile experience should receive equal or greater attention than desktop.

Design for touch.

Design for one-handed use.

Prioritise speed.

Large tap targets.

Readable typography.

Fast loading.

The mobile website should feel as polished as a premium native application.

---

# QUALITY CONTROL CHECKLIST

Before completing any page, verify:

Is the purpose clear?

Does the layout support the visitor journey?

Is the branding consistent?

Are headings logical?

Is the content accurate?

Are calls-to-action visible?

Is accessibility maintained?

Is performance optimised?

Is the page responsive?

Are animations purposeful?

Has unnecessary complexity been removed?

---

# WHAT TO AVOID

Avoid clutter.

Avoid visual noise.

Avoid unnecessary animations.

Avoid stock-photo clichés.

Avoid duplicate content.

Avoid inconsistent spacing.

Avoid hidden navigation.

Avoid dark patterns.

Avoid overwhelming users with excessive text.

Avoid making assumptions.

Avoid sacrificing usability for appearance.

---

# SUCCESS DEFINITION

The project is successful when:

Parents immediately trust the studio.

Children become excited to attend.

Visitors understand the studio's philosophy.

The website feels premium.

Navigation is effortless.

Performance is exceptional.

Accessibility is inclusive.

Content feels authentic.

Every page has a clear purpose.

The website increases enquiries and trial class bookings.

The experience reflects the professionalism and warmth of Jo Jackson Dance Company.

---

# FINAL DIRECTIVE

Treat this project as a flagship digital experience.

Do not rush decisions.

Do not compromise quality.

Do not introduce unnecessary complexity.

Respect the brand.

Respect the users.

Respect the content.

Every pixel, every word, every interaction and every line of code should contribute to one goal:

Creating a website that inspires confidence, builds trust and makes every visitor feel that Jo Jackson Dance Company is the right place to begin their dance journey.

When in doubt, choose the solution that is simpler, clearer, faster, more accessible and more human.


---

# CONTENT IMPLEMENTATION MATRIX

## Purpose

This section maps every piece of available content to its intended location within the website.

Nothing supplied by the client should be overlooked.

Every asset, paragraph, photograph, policy, timetable, testimonial and future update should have a clearly defined destination.

This document acts as the master implementation checklist during development.

---

# CLIENT INFORMATION

Studio Name

Jo Jackson Dance Company (JJDC)

Location

8 Smartt Road

Nahoon

East London

5201

Primary Contact Number

082 925 4377

Future Contact Information

Email

Facebook

Instagram

Google Business Profile

WhatsApp

Google Maps

These should appear on every appropriate page.

---

# BRAND COLOURS

Turquoise

White

Black

Implementation

Navigation

Buttons

Icons

Cards

Highlights

Forms

Footer

Hover states

Accent elements

The colour palette should remain consistent throughout the website.

---

# HOMEPAGE CONTENT

Hero Section

Studio headline

Supporting statement

Primary CTA

Secondary CTA

Background image or cinematic video

Trust Indicators

Professional Training

Competition Teams

Private Lessons

All Ages Welcome

East London Studio

Safe Environment

Why Dance

Confidence

Discipline

Fitness

Creativity

Friendship

Leadership

Self-expression

Resilience

Meet Jo

Biography summary

Portrait

Teaching philosophy

Programs Preview

Every major programme

Gallery Preview

Selected photography

Testimonials Preview

Parent testimonials

Student testimonials

Final CTA

Book a Trial Class

Contact Us

---

# ABOUT PAGE CONTENT

Studio Story

Mission

Vision

Core Values

Meet Jo

Teaching Philosophy

What Makes JJDC Different

Industry Professionals

Student Growth

Confidence

Technical Excellence

Versatility

Achievements

Gallery Highlights

Final CTA

---

# PROGRAMS PAGE CONTENT

Each programme receives its own section.

Programmes

Pre Badge

Badge Programme

Jazz

Hip Hop

Contemporary

Lyrical

Adult Jazz

Competition Teams

Private Lessons

Each section should include

Description

Benefits

Age

Requirements

Recommended attire

Progression

CTA

---

# TIMETABLE PAGE CONTENT

Complete weekly timetable

Monday

Tuesday

Wednesday

Thursday

Friday

Desktop Layout

Responsive timetable grid

Mobile Layout

Accordion schedule

Future online booking compatibility

---

# GALLERY PAGE CONTENT

Categories

Studio

Classes

Competitions

Performances

Behind the Scenes

Events

Workshops

Guest Choreographers

Celebrations

Future categories should be easily added.

---

# CONTACT PAGE CONTENT

Phone

WhatsApp

Email

Address

Google Map

Opening Hours

Social Media

Contact Form

Directions

Frequently Asked Questions

Book Trial CTA

---

# CLASS ATTIRE CONTENT

Hip Hop

Sneakers

Black tights or leggings

JJDC T-shirt

Freestyle

Black leotard

Black tights

Barefoot / Foot Undies / Jazz Shoes

Competition Students

Official JJDC apparel

Required for examinations

Competitions

Performances

Travelling teams

Future online apparel catalogue

---

# STUDIO PHILOSOPHY CONTENT

The following ideas should appear throughout the website.

Dance builds confidence.

Strong technique creates successful dancers.

Versatility matters.

Students progress at their own pace.

Examinations should never be forced.

Competitions build resilience.

Every dancer deserves encouragement.

Growth matters more than perfection.

These ideas should never appear only once.

They should become recurring themes.

---

# WHAT MAKES JJDC DIFFERENT

Bring industry professionals to East London.

Reduce travel costs for families.

Develop versatile dancers.

Technical excellence.

Positive culture.

Supportive environment.

Long-term student growth.

Premium dance education.

These messages should appear on:

Homepage

About

Programs

Marketing copy

Future social media.

---

# PHOTOGRAPHY REQUIREMENTS

Professional studio photography

Students

Parents

Competitions

Classes

Performances

Friendship

Achievement

Studio environment

Events

Future workshops

Authenticity should always be prioritised.

---

# TESTIMONIAL REQUIREMENTS

Parents

Children

Teenagers

Adult dancers

Competition students

Testimonials should focus on transformation rather than praise.

---

# FUTURE CONTENT

Competition Results

Awards

News

Events

Holiday Programmes

Teacher Profiles

Workshops

Guest Choreographers

Studio Shop

Blog

Parent Resources

Student Resources

Online Registration

These features should integrate seamlessly without redesigning the website.

---

# IMPLEMENTATION CHECKLIST

Every item supplied by the client should be checked against this matrix before launch.

Nothing should remain unused unless intentionally excluded by the client.

The website should evolve continuously as new information becomes available.

This matrix should be updated throughout the lifetime of the project.

It remains the definitive reference for content implementation across the entire website.


