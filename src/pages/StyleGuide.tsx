import React from 'react';
import { Button } from '@/components/ui/Button';

const ColorSwatch = ({ name, color, className }: { name: string; color: string; className: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-24 w-full rounded-xl shadow-md ${className}`}></div>
    <div className="flex flex-col">
      <span className="font-bold text-sm">{name}</span>
      <span className="text-xs text-muted-foreground">{color}</span>
    </div>
  </div>
);

export default function StyleGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-16 space-y-16">
      <header className="space-y-4">
        <h1 className="text-5xl font-bold text-primary">Design System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A comprehensive guide to the new visual identity, including color palette, typography, and component styles.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold border-b pb-4">Colors</h2>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Primary Palette</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Primary (Indigo)" color="bg-primary" className="bg-primary" />
            <ColorSwatch name="Primary Foreground" color="bg-primary-foreground" className="bg-primary-foreground border" />
            <ColorSwatch name="Secondary (Yellow)" color="bg-secondary" className="bg-secondary" />
            <ColorSwatch name="Secondary Foreground" color="bg-secondary-foreground" className="bg-secondary-foreground" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Neutrals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Background" color="bg-background" className="bg-background border" />
            <ColorSwatch name="Foreground" color="bg-foreground" className="bg-foreground" />
            <ColorSwatch name="Muted" color="bg-muted" className="bg-muted" />
            <ColorSwatch name="Muted Foreground" color="bg-muted-foreground" className="bg-muted-foreground" />
            <ColorSwatch name="Card" color="bg-card" className="bg-card border" />
            <ColorSwatch name="Border" color="bg-border" className="bg-border" />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold border-b pb-4">Typography</h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-muted-foreground">Headings (Outfit)</h3>
            <div className="space-y-6">
              <div>
                <h1 className="text-6xl font-bold">Heading 1</h1>
                <p className="text-sm text-muted-foreground mt-2">Outfit Bold / 6xl</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold">Heading 2</h2>
                <p className="text-sm text-muted-foreground mt-2">Outfit Bold / 5xl</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">Heading 3</h3>
                <p className="text-sm text-muted-foreground mt-2">Outfit Bold / 4xl</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold">Heading 4</h4>
                <p className="text-sm text-muted-foreground mt-2">Outfit Bold / 3xl</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-muted-foreground">Body (Plus Jakarta Sans)</h3>
            <div className="space-y-4 max-w-3xl">
              <p className="text-lg">
                <strong>Large Paragraph:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-base">
                <strong>Base Paragraph:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Small Muted:</strong> This is fine print or secondary information that needs to be less prominent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold border-b pb-4">Buttons</h2>
        
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Variants</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Sizes</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">States</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
            <Button variant="outline" disabled>Disabled Outline</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
