import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import WhoIAm from '@/components/AboutMe/WhoIAm';
import MyJourney from '@/components/AboutMe/MyJourney';
import WhatIBring from '@/components/AboutMe/WhatIBring';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function PortfolioPage() {

  return (
    <main className="min-h-screen bg-white text-black text-center p-6 font-sans">
      <section className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl  font-bold"></h1>
          <p className="text-lg text-gray-600 mt-2"></p>
        </header>

<Card>
  <CardContent className="p-6">
    <WhoIAm />
  </CardContent>
</Card>

<Card>
  <CardContent className="p-6">
    <MyJourney />
  </CardContent>
</Card>

<Card>
  <CardContent className="p-6">
    <WhatIBring />
  </CardContent>
</Card> 

<Card>
  <CardContent className="p-6">
    <Projects/>
  </CardContent>
</Card>
        
<Card>
  <CardContent className="p-6">
    <Resume />
  </CardContent>
</Card>

<Card>
  <CardContent className="p-6">
    <Contact/>
  </CardContent>
</Card>

      </section>  
    <Footer />
    </main>
  );
}

