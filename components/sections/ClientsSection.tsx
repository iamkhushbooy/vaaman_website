import { PRIMARY, DARK, clients } from '@/lib/data';

export function ClientsSection() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-sm uppercase tracking-widest font-semibold mb-2" style={{ color: PRIMARY }}>
                        Trusted By
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: DARK, fontFamily: 'Rubik, sans-serif' }}>
                        Our Clients
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {clients.map(({ logo, whiteLogo, logoClassName }) => (
                        <div
                            key={logo}
                            className="flex flex-col items-center justify-center gap-3 bg-white py-8 px-6 text-center border border-gray-100 transition-all duration-300 hover:shadow-lg cursor-default"
                            style={{ minHeight: '120px' }}
                        >
                            <div className="flex items-center justify-center" style={{ height: '48px', width: '140px' }}>
                                <img
                                    src={logo!}
                                    alt=""
                                    className={logoClassName}
                                    style={{
                                        maxHeight: '48px',
                                        maxWidth: '140px',
                                        width: 'auto',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        display: 'block',
                                        ...(whiteLogo ? { filter: 'brightness(0)' } : {}),
                                    }}
                                />
                            </div>
                            <span className="text-xs font-semibold tracking-wide" style={{ color: DARK }}></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
