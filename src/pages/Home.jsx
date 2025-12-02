import React, { useMemo, useState } from 'react';
import propertiesData from '../data/properties.json';
import testimonialsData from '../data/testimonials.json';

import Hero from '../components/Hero';
import SidebarFilter from '../components/SidebarFilter';
import PropertySections from '../components/PropertySection';
import PropertyMap from '../components/PropertyMap';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    type: '',
    minPrice: null,
    maxPrice: null
  });

  const [sidebarFilters, setSidebarFilters] = useState({
    type: '',
    minPrice: null,
    maxPrice: null,
    bedrooms: null,
    bathrooms: null
  });

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((p) => {
      if (searchFilters.location) {
        const needle = searchFilters.location.toLowerCase();
        const hay = `${p.location} ${p.title}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      if (searchFilters.type && p.type !== searchFilters.type) return false;
      if (sidebarFilters.type && p.type !== sidebarFilters.type) return false;

      const mins = [searchFilters.minPrice, sidebarFilters.minPrice].filter((v) => v !== null && v !== undefined);
      const maxs = [searchFilters.maxPrice, sidebarFilters.maxPrice].filter((v) => v !== null && v !== undefined);
      const effectiveMin = mins.length ? Math.max(...mins) : null;
      const effectiveMax = maxs.length ? Math.min(...maxs) : null;
      if (effectiveMin !== null && p.price < effectiveMin) return false;
      if (effectiveMax !== null && p.price > effectiveMax) return false;

      if (sidebarFilters.bedrooms !== null && p.bedrooms < sidebarFilters.bedrooms) return false;
      if (sidebarFilters.bathrooms !== null && p.bathrooms < sidebarFilters.bathrooms) return false;

      return true;
    });
  }, [propertiesData, searchFilters, sidebarFilters]);

  const hot = useMemo(() => filteredProperties.filter((p) => p.status === 'hot').slice(0, 6), [filteredProperties]);
  const newest = useMemo(() => filteredProperties.filter((p) => p.status === 'new').slice(0, 6), [filteredProperties]);
  const sold = useMemo(() => filteredProperties.filter((p) => p.status === 'sold').slice(0, 6), [filteredProperties]);

  return (
    <>
      <Hero searchFilters={searchFilters} onSearchChange={setSearchFilters} />

      {/* Listings area (sidebar + properties). No negative margin, and sticky stops here */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<section id="listings" className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 items-start">
  <div className="md:col-span-3 md:self-start">
    <SidebarFilter filters={sidebarFilters} onChange={setSidebarFilters} />
  </div>
  <div className="md:col-span-9">
    <PropertySections hot={hot} newest={newest} sold={sold} />
  </div>
</section>
      </main>

      {/* Full-width map below listings */}
      <PropertyMap />

      {/* Centered testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <Testimonials testimonials={testimonialsData} />
      </section>
    </>
  );
};

export default Home;