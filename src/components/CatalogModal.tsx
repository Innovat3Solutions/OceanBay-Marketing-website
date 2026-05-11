import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { X, ExternalLink, Download } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { CATALOG_PDF_URL } from "@/data/products";

const EASE = [0.22, 1, 0.36, 1] as const;

type CatalogCtx = {
  open: boolean;
  openCatalog: () => void;
  closeCatalog: () => void;
};

const CatalogContext = createContext<CatalogCtx | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openCatalog = useCallback(() => setOpen(true), []);
  const closeCatalog = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <CatalogContext.Provider value={{ open, openCatalog, closeCatalog }}>
      {children}
      <AnimatePresence>
        {open && <CatalogModal onClose={closeCatalog} />}
      </AnimatePresence>
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const ctx = useContext(CatalogContext);
  if (!ctx) throw new Error("useCatalog must be used within CatalogProvider");
  return ctx;
}

function CatalogModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.4, ease: EASE as unknown as number[] }}
        className="relative w-full max-w-6xl h-[92vh] bg-[#071A2D] border border-white/10 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 md:px-6 py-4 bg-white/5">
          <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2FA8A0] mb-1">
              Ocean Bay Marketing
            </p>
            <h2 className="text-white font-display text-lg md:text-xl truncate">
              Mavi Mare Product Catalog
            </h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={CATALOG_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-3 py-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Open in new tab
            </a>
            <a
              href={CATALOG_PDF_URL}
              download="mavi-mare-catalog.pdf"
              className="hidden sm:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#071A2D] bg-[#F4F1EC] hover:bg-[#2FA8A0] hover:text-white px-3 py-2 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close catalog"
              className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-white/5 relative">
          <iframe
            src={CATALOG_PDF_URL}
            title="Mavi Mare Product Catalog"
            className="absolute inset-0 w-full h-full bg-white"
          />
          {/* Fallback message — only visible if iframe fails to load (positioned beneath) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Loading catalog...</p>
          </div>
        </div>

        {/* Mobile actions footer */}
        <div className="sm:hidden flex items-center gap-2 border-t border-white/10 px-4 py-3 bg-white/5">
          <a
            href={CATALOG_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-white border border-white/20 px-3 py-3 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Open
          </a>
          <a
            href={CATALOG_PDF_URL}
            download="mavi-mare-catalog.pdf"
            className="flex-1 inline-flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#071A2D] bg-[#F4F1EC] px-3 py-3 transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Download
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CatalogTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { openCatalog } = useCatalog();
  return (
    <button type="button" onClick={openCatalog} className={className}>
      {children}
    </button>
  );
}
