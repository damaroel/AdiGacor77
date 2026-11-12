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
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Bagian Pembuka (Hero / Intro) */}
        <Hero />

        {/* Bagian Tentang (About: Sarjana Hukum & Filosofi Pemberantasan Judol) */}
        <About />

        {/* Bagian Karya (eddflux.com & ternaku.id) */}
        <Works />

        {/* Bagian Dokumentasi (Dokumentasi Kasus, Modus, & Edukasi Hukum) */}
        <Documentation />

        {/* Bagian Laporan (Pusat Pengaduan & Generator Draf Laporan Hukum) */}
        <ReportSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
