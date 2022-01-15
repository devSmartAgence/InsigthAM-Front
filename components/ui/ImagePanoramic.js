export default function ImagePanoramic({ src }) {
  return (
    <div class="relative overflow-hidden pb-[56.25%] mb-[60px]">
      <img src={src} alt="" class="absolute h-full w-full object-cover" />
    </div>
  );
}
