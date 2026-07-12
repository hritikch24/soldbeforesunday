CREATE TABLE IF NOT EXISTS "Event" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "type" TEXT NOT NULL DEFAULT 'pageview',
  "page" TEXT,
  "ref" TEXT,
  "ua" TEXT,
  CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "Event_createdAt_idx" ON "Event" ("createdAt");
CREATE INDEX IF NOT EXISTS "Event_type_idx" ON "Event" ("type");
