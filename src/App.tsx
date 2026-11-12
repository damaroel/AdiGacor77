/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Works } from './components/Works';
import { Documentation } from './components/Documentation';
import { ReportSection } from './components/ReportSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1C1917] selection:bg-[#E0D4BA] selection:text-[#1C1917]">
      {/* 3-Zone Sticky Navigation Bar */}
      <div className="no-print">
        <Navbar />
      </div>

      {/* Main Single Page Content */}
      <main>
        {/* Bagian Pembuka (Hero / Intro) */}
        <div className="no-print">
          <Hero />
        </div>

        {/* Bagian Tentang (About: Sarjana Hukum & Filosofi Pemberantasan Judol) */}
        <div className="no-print">
          <About />
        </div>

        {/* Bagian Karya (eddflux.com & ternaku.id) */}
        <div className="no-print">
          <Works />
        </div>

        {/* Bagian Dokumentasi (Dokumentasi Kasus, Modus, & Edukasi Hukum) */}
        <div className="no-print">
          <Documentation />
        </div>

        {/* Bagian Laporan (Pusat Pengaduan & Generator Draf Laporan Hukum) */}
        <ReportSection />
      </main>

      {/* Footer */}
      <div className="no-print">
        <Footer />
      </div>
    </div>
  );
}
