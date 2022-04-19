import React from "react";
import type { AppBarData } from "../types/AppBar";

const vectorSvg = <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex">
  <circle cx="23" cy="23" r="23" fill="#FF5000" />
  <path d="M34.9488 15H9C10.5332 15.5746 12.6125 16.5419 14.6919 18.036L29.6882 18.0934L22.2906 30.5247C22.5302 32.354 22.5494 34.3748 22.2619 36.6063L34.9488 15Z" fill="#FDFDFD" />
  <path d="M26.4109 19.9609L17.0011 19.9801C18.9654 21.8955 20.6998 24.3952 21.6676 27.6323L26.4109 19.9609Z" fill="#FDFDFD" />
</svg>;

const vectorSvgList = <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex">
  <circle cx="23" cy="23" r="23" fill="#910F73" fill-opacity="0"/>
  <path d="M34.9488 15H9C10.5332 15.5746 12.6125 16.5419 14.6919 18.036L29.6882 18.0934L22.2906 30.5247C22.5302 32.354 22.5494 34.3748 22.2619 36.6063L34.9488 15Z" fill="#FF5000" />
  <path d="M26.4109 19.9609L17.0011 19.9801C18.9654 21.8955 20.6998 24.3952 21.6676 27.6323L26.4109 19.9609Z" fill="#FF5000" />
</svg>;

const arrowRightIcon = <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex">
  <path d="M11.08 12.59L13.67 10H4V8H13.67L11.08 5.41L12.5 4L17.5 9L12.5 14L11.08 12.59ZM16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V6.67L16 4.67V2H2V16H16V13.33L18 11.33V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 0.89 0.89 0 2 0H16Z" fill="#888682" />
</svg>;

const settingsIcon = <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex">
  <path d="M10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93913 14 7.92172 13.5786 7.17157 12.8284C6.42143 12.0783 6 11.0609 6 10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6ZM10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8ZM8 20C7.75 20 7.54 19.82 7.5 19.58L7.13 16.93C6.5 16.68 5.96 16.34 5.44 15.94L2.95 16.95C2.73 17.03 2.46 16.95 2.34 16.73L0.339999 13.27C0.278795 13.167 0.257218 13.0452 0.279304 12.9274C0.30139 12.8096 0.365626 12.7039 0.459999 12.63L2.57 10.97L2.5 10L2.57 9L0.459999 7.37C0.365626 7.29613 0.30139 7.19042 0.279304 7.07263C0.257218 6.95484 0.278795 6.83304 0.339999 6.73L2.34 3.27C2.46 3.05 2.73 2.96 2.95 3.05L5.44 4.05C5.96 3.66 6.5 3.32 7.13 3.07L7.5 0.42C7.54 0.18 7.75 0 8 0H12C12.25 0 12.46 0.18 12.5 0.42L12.87 3.07C13.5 3.32 14.04 3.66 14.56 4.05L17.05 3.05C17.27 2.96 17.54 3.05 17.66 3.27L19.66 6.73C19.79 6.95 19.73 7.22 19.54 7.37L17.43 9L17.5 10L17.43 11L19.54 12.63C19.73 12.78 19.79 13.05 19.66 13.27L17.66 16.73C17.54 16.95 17.27 17.04 17.05 16.95L14.56 15.95C14.04 16.34 13.5 16.68 12.87 16.93L12.5 19.58C12.46 19.82 12.25 20 12 20H8ZM9.25 2L8.88 4.61C7.68 4.86 6.62 5.5 5.85 6.39L3.44 5.35L2.69 6.65L4.8 8.2C4.4 9.36667 4.4 10.6333 4.8 11.8L2.68 13.36L3.43 14.66L5.86 13.62C6.63 14.5 7.68 15.14 8.87 15.38L9.24 18H10.76L11.13 15.39C12.32 15.14 13.37 14.5 14.14 13.62L16.57 14.66L17.32 13.36L15.2 11.81C15.6 10.64 15.6 9.37 15.2 8.2L17.31 6.65L16.56 5.35L14.15 6.39C13.3642 5.48032 12.2983 4.85767 11.12 4.62L10.75 2H9.25Z" fill="#888682" />
</svg>;

const NotificationsIcon = ({ classNames} : any) => <svg viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={`fill-current ${classNames}`} d="M13.7647 15.75H4.23529V8.925C4.23529 6.3 6.35294 4.2 9 4.2C11.6471 4.2 13.7647 6.3 13.7647 8.925V15.75ZM15.8824 14.7V8.925C15.8824 5.7015 13.6165 3.003 10.5882 2.289V1.575C10.5882 1.15728 10.4209 0.756677 10.1231 0.461307C9.8252 0.165937 9.42123 0 9 0C8.57877 0 8.1748 0.165937 7.87695 0.461307C7.5791 0.756677 7.41177 1.15728 7.41177 1.575V2.289C4.37294 3.003 2.11765 5.7015 2.11765 8.925V14.7L0 16.8V17.85H18V16.8L15.8824 14.7ZM9 21C9.56164 21 10.1003 20.7787 10.4974 20.3849C10.8945 19.9911 11.1176 19.457 11.1176 18.9H6.88235C6.88235 19.457 7.10546 19.9911 7.5026 20.3849C7.89973 20.7787 8.43837 21 9 21Z" />
</svg>;

const pointIcon = <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="5.28373" cy="4.5" rx="4.71635" ry="4.5" fill="#FF5000" />
</svg>;

const appBarMockData: AppBarData = {
  Icons: {
    vector: vectorSvg,
    vectorList: vectorSvgList,
    arrowRigth: arrowRightIcon,
    settings: settingsIcon,
    Notification: NotificationsIcon,
  },
  notifications: [
    { text: 'Lorem ipsum dolor sit amet', time: 'Hace 0 horas', icon: pointIcon },
    { text: 'Lorem ipsum dolor sit amet', time: 'Hace 0 horas', icon: pointIcon },
    { text: 'Lorem ipsum dolor sit amet', time: 'Hace 0 horas', icon: pointIcon },
  ]
};

export { appBarMockData };