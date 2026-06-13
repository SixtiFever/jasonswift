# Black Hole Component — Construction Guide

## Overview

The `BlackHole` component is a pure CSS/DOM React component that visually represents a cosmic black hole (collapsed star). It uses **five concentric circular layers**, each built with `radial-gradient` backgrounds and CSS animations to simulate the light-bending effects around a black hole's event horizon.

## Architecture

The component is a single absolutely-positioned container `<div>` with five child `<div>` elements stacked on top of each other. All children are centered using flexbox on the parent. Each layer is a circle (`border-radius: 50%`) sized proportionally to a base `size` prop.

```
┌─────────────────────────────────────────────┐
│           Accretion Outer (3.5x)            │
│    ┌───────────────────────────────────┐    │
│    │       Accretion Disk (2.5x)       │    │
│    │   ┌───────────────────────────┐   │    │
│    │   │    Accretion Inner (1.8x) │   │    │
│    │   │  ┌─────────────────────┐  │   │    │
│    │   │  │ Photon Sphere (1.3x)│  │   │    │
│    │   │  │  ┌───────────────┐  │  │   │    │
│    │   │  │  │ Event Horizon │  │  │   │    │
│    │   │  │  │    (1.0x)     │  │  │   │    │
│    │   │  │  └───────────────┘  │  │   │    │
│    │   │  └─────────────────────┘  │   │    │
│    │   └───────────────────────────┘   │    │
│    └───────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## Layer Breakdown

### 1. Accretion Outer — The Wide Halo

**Size:** `size * 3.5`

The outermost layer represents the faint glow of superheated matter orbiting far from the black hole.

**Technique:** A `radial-gradient` that transitions from a very faint warm orange at the center (`rgba(255, 150, 50, 0.08)`) through a dim purple (`rgba(200, 100, 255, 0.05)`) and fades to transparent at 70%.

**Animation:** `pulseOuter` — an 8-second ease-in-out loop that subtly scales the layer between `scale(1)` and `scale(1.05)` while oscillating opacity between 0.6 and 1. This creates a slow "breathing" effect.

### 2. Accretion Disk — The Main Ring

**Size:** `size * 2.5`

This is the primary visual feature — the bright ring of light from matter spiraling into the black hole.

**Technique:** A multi-stop `radial-gradient` that creates a **ring shape**:
- Transparent from 0–40% (hollow center)
- Faint orange at 50% (outer edge of ring fading in)
- Bright orange at 58% (ring body)
- Brightest golden-white at 62% (ring peak — the hottest point)
- Orange fading out at 66%
- Purple tinge at 74% (gravitational redshift effect)
- Transparent at 85% (ring fading to nothing)

The key insight is that `radial-gradient` with transparent center + colored band + transparent outer = **a ring**, not a filled circle.

**Animation:** `rotateDisk` — a continuous 20-second linear rotation (`rotate(0deg)` to `rotate(360deg)`). Even though the gradient is circular (and rotation of a perfect circle looks the same), this creates subtle visual movement when combined with the other pulsing layers.

### 3. Accretion Inner — The Hot Ring

**Size:** `size * 1.8`

A tighter, hotter ring sitting just outside the event horizon where matter is accelerated to near light speed.

**Technique:** Another ring-shaped `radial-gradient`:
- Transparent 0–50%
- Faint warm glow at 58%
- Bright white-gold peak at 63% (`rgba(255, 255, 200, 0.4)`)
- Fading back through warm and transparent

The white-gold color represents the extreme temperature of matter at this proximity.

**Animation:** `pulseInner` — a 4-second cycle (faster than the outer pulse) that oscillates opacity (0.7 to 1) and scale (1 to 1.03). The faster pulse suggests more energetic activity closer to the core.

### 4. Photon Sphere — The Boundary Glow

**Size:** `size * 1.3`

In real black hole physics, the photon sphere is where light itself orbits the black hole. This layer represents that eerie glow.

**Technique:** A `radial-gradient` with a violet/blue tint:
- Transparent 0–60%
- Faint blue-purple at 70% (`rgba(180, 160, 255, 0.15)`)
- Dimmer purple at 80%
- Transparent at 90%

The purple/violet color was chosen because gravitationally blue-shifted light would appear at higher frequencies.

**Animation:** `pulseSphere` — a 6-second opacity-only pulse (0.5 to 1). No scale change, just a ghostly flickering at the boundary of no return.

### 5. Event Horizon — The Pitch Black Core

**Size:** `size * 1.0` (the base size)

The event horizon — nothing escapes from here.

**Technique:**
- A `radial-gradient` from pure `#000000` at center through 70%, then very slightly less opaque at the edges (0.95 at 85%, 0.8 at 100%). This slight transparency at the very edge allows the inner ring layers to bleed through subtly, suggesting the warping of spacetime.
- A `box-shadow` with two layers:
  - `0 0 30px 10px rgba(0, 0, 0, 0.8)` — tight dark shadow
  - `0 0 60px 20px rgba(0, 0, 0, 0.5)` — wider softer shadow

  These shadows extend the "void" effect beyond the circle boundary, swallowing nearby light.

**Animation:** None — the void is absolute and still.

## Sizing System

All layers scale proportionally from a single `size` prop:

| Layer           | Multiplier | Default (size=120) |
|-----------------|------------|--------------------|
| Accretion Outer | 3.5x       | 420px              |
| Accretion Disk  | 2.5x       | 300px              |
| Accretion Inner | 1.8x       | 216px              |
| Photon Sphere   | 1.3x       | 156px              |
| Event Horizon   | 1.0x       | 120px              |

## Positioning

The wrapper uses `position: absolute` with `left` and `top` set from the `x` and `y` props. A `transform: translate(-50%, -50%)` centers the component on that coordinate. All child layers are centered within the wrapper via `display: flex; align-items: center; justify-content: center`.

## Animation Timing Summary

| Layer           | Animation    | Duration | Type         | Effect              |
|-----------------|-------------|----------|--------------|---------------------|
| Accretion Outer | pulseOuter  | 8s       | ease-in-out  | Scale + opacity     |
| Accretion Disk  | rotateDisk  | 20s      | linear       | Continuous rotation |
| Accretion Inner | pulseInner  | 4s       | ease-in-out  | Scale + opacity     |
| Photon Sphere   | pulseSphere | 6s       | ease-in-out  | Opacity only        |
| Event Horizon   | —           | —        | —            | Static void         |

The different durations (4s, 6s, 8s, 20s) are intentionally **non-multiples** of each other so the combined visual never exactly repeats, creating an organic, living feel.

## Usage

The component is a DOM overlay — it must be placed **outside** of Konva's `<Stage>` since it renders HTML `<div>` elements, not canvas shapes.

```tsx
<BlackHole x={window.innerWidth / 2} y={window.innerHeight / 2} size={120} />
```
