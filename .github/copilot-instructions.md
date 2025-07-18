<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Jabari Livestream Project

This is a React + Vite project for livestreaming from a Raspberry Pi camera using HLS (HTTP Live Streaming).

## Project Structure
- React frontend with TypeScript
- HLS.js for video streaming
- Custom CSS for styling (no Tailwind)
- Vite for build tooling

## Key Components
- `HLSVideoPlayer`: Main video player component with custom controls
- Modern UI with dark theme
- Real-time streaming controls and monitoring

## Development Guidelines
- Use TypeScript for type safety
- Follow React hooks best practices
- Implement proper error handling for streaming
- Use vanilla CSS for styling
- Maintain responsive design principles

## Streaming Setup
- HLS protocol for low-latency streaming
- Support for live stream indicators
- Custom video controls with volume, fullscreen, etc.
- Error recovery mechanisms for network issues

## CSS Architecture
- Component-specific CSS files
- BEM-like naming convention
- Responsive design with mobile-first approach
- Dark theme throughout the application
