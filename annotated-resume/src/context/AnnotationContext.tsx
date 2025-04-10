import { createContext, useContext, useState, ReactNode } from 'react';

interface AnnotationContextType {
  openAnnotationId: string | null;
  openAnnotation: (id: string) => void;
  closeAnnotation: () => void;
}

const AnnotationContext = createContext<AnnotationContextType | undefined>(undefined);

interface AnnotationProviderProps {
  children: ReactNode;
}

/**
 * AnnotationProvider - Manages the state of open annotations
 * @param {ReactNode} children - Child components
 */
export const AnnotationProvider = ({ children }: AnnotationProviderProps) => {
  const [openAnnotationId, setOpenAnnotationId] = useState<string | null>(null);

  const openAnnotation = (id: string) => {
    setOpenAnnotationId(id);
  };

  const closeAnnotation = () => {
    setOpenAnnotationId(null);
  };

  return (
    <AnnotationContext.Provider value={{ openAnnotationId, openAnnotation, closeAnnotation }}>
      {children}
    </AnnotationContext.Provider>
  );
};

/**
 * useAnnotation - Hook to access annotation context
 * @returns {AnnotationContextType} Annotation context values
 */
export const useAnnotation = () => {
  const context = useContext(AnnotationContext);
  if (context === undefined) {
    throw new Error('useAnnotation must be used within an AnnotationProvider');
  }
  return context;
}; 