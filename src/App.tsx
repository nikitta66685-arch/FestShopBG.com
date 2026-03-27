/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import MasterPlan from './components/MasterPlan';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isPlanOpen, setIsPlanOpen] = useState(false);

  return (
    <Layout onOpenPlan={() => setIsPlanOpen(true)}>
      <Home />
      
      <AnimatePresence>
        {isPlanOpen && (
          <MasterPlan onClose={() => setIsPlanOpen(false)} />
        )}
      </AnimatePresence>
    </Layout>
  );
}
